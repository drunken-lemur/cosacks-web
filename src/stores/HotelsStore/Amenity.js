import { types } from "mobx-state-tree";

export const Amenity = types.model("Amenity", {
  id: types.identifier,
  tag: types.string,
  name: types.string,
  icon: types.maybeNull(types.string),
  parent_id: types.maybeNull(types.string),
})

