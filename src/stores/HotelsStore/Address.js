import { types } from "mobx-state-tree";

export const Address = types.model("Address", {
  location: types.string,
  coordinates: types.array(types.number)
});
