import { types } from "mobx-state-tree";

export const Price = types.model("Price", {
  amount: types.number,
  currency: types.optional(types.string, "RUB")
});
