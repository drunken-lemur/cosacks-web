import { types, applySnapshot, detach } from 'mobx-state-tree';
import instance from 'Connection/instance';

import { RoomType } from './RoomType';
import { Meta } from './Meta';
import { Pricing } from './Pricing';

const HotelPrices = types.model('HotelPrices', {
  id: types.identifier,
  slug: types.string,
  name: types.string,
  pricing: Pricing,
  room_types: types.optional(types.array(RoomType), [])
});

const HotelPricing = types
  .model('HotelPricing', {
    meta: types.maybeNull(Meta),
    data: types.maybeNull(HotelPrices),
    state: types.maybeNull(types.enumeration(['pending', 'done', 'error']))
  })
  .views(self => ({
    get isFetched() {
      return self.state === 'done';
    },

    get isPending() {
      return self.state === 'pending';
    },

    get isError() {
      return self.state === 'error';
    }
  }))
  .actions(self => ({
    fetch(params = {}) {
      self.setState('pending');

      const { id, ...options } = params;
      const data = { data: options };

      return instance
        .get(`/api/hotels/${id}/price_list`, { params: data })
        .then(response => self.resetStore(response))
        .then(store => self.setState('done'))
        .catch(error => self.errorHandler(error));
    },

    errorHandler(error) {
      self.setState('error');
      return Promise.reject(error);
    },

    clear() {
      detach(self);
    },

    setState(state) {
      self.state = state;
      return self;
    },

    resetStore(response) {
      const { status, data } = response;

      if (status === 200) {
        applySnapshot(self, data);
      }

      return self;
    }
  }));

export default HotelPricing;
