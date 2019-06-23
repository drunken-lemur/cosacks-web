import { types, getParentOfType } from "mobx-state-tree";
import moment from "Utils/moment";

import { Tariff } from "./Tariff";
import { Rate } from "./Rate";
import { Availability } from "./Availability";

export const TariffDailyPrice = types.model("TariffDailyPrice", {
  day: types.identifier,
  rates: types.array(Rate),
  availability: Availability
})
.views(self => ({
  get tariff() {
    return getParentOfType(self, Tariff);
  },

  get isAvailable() {
    const currentDate = moment(self.day);
    const dayNow = moment();
    const endDay = moment(self.tariff.available_period.to);

    const isAvailable = self.availability.available > 0;

    const isDatesBetween = currentDate.isSameOrAfter(dayNow)
      && currentDate.isSameOrBefore(endDay)

    return isAvailable && isDatesBetween
  }
}));
