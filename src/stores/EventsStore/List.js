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
  data: types.optional(types.array(Event), []),
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
  setStatusPending() {
    self.setStatus(Statuses.pending);
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
    console.log('resetData', response);

    applySnapshot(self, response);

    return self;
  },
  fetch() {
    self.setStatusPending();

    return Events.find()
      .then(self.resetData)
      .then(self.setStatusDone)
      .catch(self.onError);
  },
  delete(id) {
    self.setStatusPending();

    return Events.remove(id)
      .then(self.setStatusDone)
      .then(self.fetch)
      .catch(self.onError);
  }
}));

export default EventsStore;
