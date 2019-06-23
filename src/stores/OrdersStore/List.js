import { types, applySnapshot, getSnapshot } from "mobx-state-tree";
import instance from "Connection/instance";

const OrdersStore = types.model("OrdersStore", {
  data: types.optional(types.array(), []),
  state: types.maybeNull(types.enumeration(["pending", "done", "error"])),
})
.views(self => ({
  get isFetched() {
    return self.state === "done";
  },

  get isPending() {
    return self.state === "pending";
  },

  get isError() {
    return self.state === "error";
  },

  get selectOptions() {
    return getSnapshot(self.data);
  }
}))
.actions(self => ({
  fetch(params = {}) {
    self.setState('pending');

    return instance.get(`/api/classifiers/medical_services`, { params })
      .then(response => self.resetStore(response))
      .then(response => self.setState('done'))
      .catch(error => self.errorHandler(error))
  },

  setState(state) {
    self.state = state;
    return self;
  },

  resetStore(response) {
    const { status, data } = response;

    if (status === 200)
      applySnapshot(self, data)

    return self;
  },

  errorHandler(error) {
    self.setState("error")
    return Promise.reject(error);
  }
}))

export default OrdersStore;
