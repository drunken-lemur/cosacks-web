import { types } from "mobx-state-tree";

export const AgePeriod = types.model("AgePeriod", {
  from: types.number,
  to: types.number
})
