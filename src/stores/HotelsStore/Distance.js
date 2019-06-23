import { types } from "mobx-state-tree";

export const Distance = types.model("Distance", {
  id: types.identifier,
  name: types.string,
  description: types.string,
  value: types.number,
  unit: types.string,
  icon: types.optional(types.string, 'bus'),
})
