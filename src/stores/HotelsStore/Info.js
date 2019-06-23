import {
  types,
  applySnapshot,
  resolveIdentifier,
  detach
} from 'mobx-state-tree';
import instance from 'Connection/instance';

import { Hotel } from './Hotel';
import { RoomType } from './RoomType';
import { Tariff } from './Tariff';
import { Meta } from './Meta';

const HotelInfo = types
  .model('HotelInfo', {
    meta: types.maybeNull(Meta),
    data: types.maybeNull(Hotel),
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

      return instance
        .get(`/api/hotels/${id}`, { params: options })
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
    },

    findRoomType(id) {
      return resolveIdentifier(RoomType, self, id);
    },

    findTariff(id) {
      return resolveIdentifier(Tariff, self, id);
    },

    findHotel(id) {
      return resolveIdentifier(Hotel, self, id);
    }
  }));

export default HotelInfo;
