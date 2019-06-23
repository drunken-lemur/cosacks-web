import { types } from "mobx-state-tree";

export const Specialization = types.model("Specialization", {
  code: types.identifier,
  name: types.string,
})

