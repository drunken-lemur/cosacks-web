import { types } from "mobx-state-tree";

export const TariffHint = types.model("TariffHint", {
  type: types.string,
  payload: types.frozen()
});
