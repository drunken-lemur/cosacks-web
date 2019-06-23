import { types } from 'mobx-state-tree';
import moment from 'Utils/moment';

import { Availability } from './Availability';

export const DailyPrice = types
  .model('DailyPrice', {
    day: types.identifier,
    price: types.number,
    availability: Availability
  })
  .views(self => ({
    get isAvailable() {
      const currentDate = moment(self.day);
      const dayNow = moment();

      return self.availability.isAvailable && currentDate.isSameOrAfter(dayNow);
    },

    get isActive() {
      return self.availability.isActive;
    }
  }));
