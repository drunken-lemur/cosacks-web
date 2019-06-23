import { types, applySnapshot, getSnapshot } from "mobx-state-tree";
import instance from "Connection/instance";

const Address = types.model("Address", {
  location: types.string,
  coordinates: types.array(types.number)
})

const Hotel = types.model("Hotel", {
  id: types.identifier,
  name: types.string,
  address: Address
})

const HotelsStore = types.model("HotelsStore", {
  data: types.optional(types.array(Hotel), []),
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

    return instance.get(`/api/filters/hotels`, { params })
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

export default HotelsStore;
