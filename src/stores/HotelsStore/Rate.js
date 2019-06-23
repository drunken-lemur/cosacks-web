import { types } from "mobx-state-tree";

import { AgePeriod } from "./AgePeriod";

export const Rate = types.model("Rate", {
  type: types.string,
  age_group: types.enumeration(["adult", "child"]),
  age_period: types.maybeNull(AgePeriod),
  occupation: types.enumeration(["main", "extra"]),
  count: types.number,
  price: types.number
});
