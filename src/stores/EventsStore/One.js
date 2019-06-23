import {Events} from 'services';
import {Event} from 'stores/models';
import {applySnapshot, types} from 'mobx-state-tree';

const Statuses = {
  done: 'done',
  pending: 'pending',
  error: 'error',
};

const EventsStore = types.model('EventsStore', {
  status: types.maybeNull(
    types.enumeration(Object.keys(Statuses))
  ),
  data: types.maybeNull(Event),
}).views(self => ({
  get isFetched() {
    return self.status === Statuses.done;
  },
  get isPending() {
    return self.status === Statuses.pending;
  },
  get isError() {
    return self.status === Statuses.error;
  }
})).actions(self => ({
  setStatus(status) {
    self.status = status;

    return self;
  },
  setStatusDone(response) {
    self.setStatus(Statuses.done);

    return response;
  },
  onError(error) {
    self.setStatus(Statuses.error);

    return Promise.reject(error);
  },
  resetData(response) {
    const {status, data} = response;

    if (status === 200) {
      applySnapshot(self, data);
    }

    return self;
  },
  fetch(query) {
    self.setStatus(Statuses.pending);

    return Events.find({query})
      .then(self.resetData)
      .then(self.setStatusDone)
      .catch(self.onError);
  }
}));

export default EventsStore;
