import { types } from "mobx-state-tree";

export const Availability = types.model("Availability", {
  in_all: types.number,
  available: types.number,
  restriction: types.maybeNull(types.number),
  busy: types.number,
  is_active: types.boolean
})
.views(self => ({
  get isAvailable() {
    return self.available > 0
  },

  get isActive() {
    return self.is_active
  }
}));
