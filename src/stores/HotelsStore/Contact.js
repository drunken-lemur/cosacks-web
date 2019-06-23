import { types } from "mobx-state-tree";

export const Contact = types.model("Contact", {
  type: types.enumeration(["email", "phone"]),
  value: types.string,
  suffix: types.maybeNull(types.string)
})
