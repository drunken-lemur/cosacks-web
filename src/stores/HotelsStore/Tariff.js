import { types, getParent } from 'mobx-state-tree';

import _clone from 'lodash/clone';
import _pick from 'lodash/pick';

import { TariffDailyPrice } from './TariffDailyPrice';
import { TariffHint } from './TariffHint';
import { TariffSlot } from './TariffSlot';

const Seat = types.model('Seat', {
  age_group: types.enumeration(['adult', 'child']),
  occupation: types.enumeration(['main', 'extra']),
  count: types.number
});

const Occupancy = types.model('Occupancy', {
  code: types.number,
  seats: types.array(Seat)
});

const PricePeriod = types.model('PricePeriod', {
  value: types.number,
  unit: types.enumeration(['day', 'night'])
});

const AvailablePeriod = types.model('AvailablePeriod', {
  from: types.string,
  to: types.string
});

const StayPeriod = types
  .model('StayPeriod', {
    min_days: types.number
  })
  .views(self => ({
    get tariff() {
      return getParent(self);
    }
  }));

const TariffService = types.model('TariffService', {
  id: types.identifier,
  name: types.string,
  description: types.string,
  pace: types.string,
  pace_name: types.string,
  quantity: types.number
});

export const Tariff = types
  .model('Tariff', {
    id: types.identifier,
    name: types.string,
    description: types.string,
    discount: types.optional(types.number, 0),
    discount_price: types.optional(types.number, 0),
    discount_percent: types.optional(types.number, 0),
    price: types.number,
    is_available: types.boolean,
    price_period: PricePeriod,
    available_period: AvailablePeriod,
    stay_period: StayPeriod,
    occupancy: types.array(Occupancy),
    services: types.array(TariffService),
    billing_hour: types.enumeration(['day', 'night']),
    prices: types.optional(types.array(TariffDailyPrice), []),
    hints: types.optional(types.array(TariffHint), []),
    slots: types.optional(types.array(TariffSlot), [])
  })
  .views(self => ({}))
  .actions(self => ({
    toForm() {
      let data = self.toJSON();
      data = _clone(data);
      data = _pick(data, [
        'id',
        'name',
        'stay_period',
        'billing_hour',
        'rate_types'
      ]);

      return data;
    }
  }));
