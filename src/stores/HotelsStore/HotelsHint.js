import { types } from "mobx-state-tree";

export const HotelsHint = types.model("HotelsHint", {
  type: types.string,
  payload: types.frozen(),
  description: types.string
});
