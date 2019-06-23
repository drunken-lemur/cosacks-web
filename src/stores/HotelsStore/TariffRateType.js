import { types } from "mobx-state-tree";

import { AgePeriod } from "./AgePeriod";

export const TariffRateType = types.model("TariffRateType", {
  type: types.string,
  description: types.string,
  age_group: types.enumeration(["adult", "child"]),
  age_period: types.maybeNull(AgePeriod),
  occupation: types.enumeration(["main", "extra"]),
  count: types.number
});
