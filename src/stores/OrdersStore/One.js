import { types, applySnapshot } from 'mobx-state-tree';
import instance from 'Connection/instance';

import { Order } from './Order';

const OrderStore = types
  .model('OrderStore', {
    data: types.maybeNull(Order),
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
        .get(`/api/orders/${id}`, { options })
        .then(response => self.resetStore(response))
        .then(response => self.setState('done'))
        .catch(error => self.errorHandler(error));
    },

    create(values = {}) {
      self.setState('pending');

      return instance
        .post(`/api/orders`, { data: values })
        .then(response => self.resetStore(response))
        .then(response => self.setState('done'))
        .catch(error => self.errorHandler(error));
    },

    setState(state) {
      self.state = state;
      return self;
    },

    resetStore(response) {
      const { status, data } = response;

      if (status === 200) applySnapshot(self, data);

      return self;
    },

    errorHandler(error) {
      self.setState('error');
      return Promise.reject(error);
    }
  }));

export default OrderStore;
