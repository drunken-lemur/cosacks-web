import { types, applySnapshot, resolveIdentifier, detach } from "mobx-state-tree";
import instance from "Connection/instance";

import _pick from "lodash/pick";
import _merge from "lodash/merge";
import moment from "Utils/moment";
import { datesArray } from "Utils/datesArray";

import { DailyPrice } from "./DailyPrice";

const PricesStore = types.model("PricesStore", {
  hotel_id: types.string,
  room_type_id: types.string,
  tariff_id: types.string,
  check_in: types.string,
  check_out: types.string,
  discount_percent: types.optional(types.integer, 0),
  prices: types.optional(types.array(DailyPrice), []),
  state: types.maybeNull(types.enumeration(["pending", "done", "error"])),
})
  .views(self => ({
    get isFetched() {
      return self.state === "done";
    },

    get isPending() {
      return self.state === "pending";
    },

    get isError() {
      return self.state === "error";
    },

    get disabledDays() {
      if (self.prices.length > 0)
        return self.prices
          .filter(price => !price.isAvailable)
          .map(price => moment(price.day).toDate())

      const checkIn = self.check_in;
      const checkOut = self.check_out;

      return datesArray({ checkIn, checkOut })
    }
  }))
  .actions(self => ({
    fetch(options = {}) {
      self.setState('pending')

      let params = _pick(
        self.toJSON(),
        ['tariff_id', 'room_type_id', 'check_in', 'check_out']
      )

      params = _merge(params, options);

      params = { data: params };

      return instance.get(`/api/hotels/${self.hotel_id}/tariff_price`, { params })
        .then(response => self.resetStore(response))
        .then(_ => self.setState("done"))
        .catch(self.errorHandler)
    },

    nextMonth() {
      const check_in = self.check_in;

      // Set checkIn
      const nextCheckIn = moment(check_in)
        .add(1, 'month')
        .startOf('month')
        .format('YYYY-MM-DD');

      self.check_in = nextCheckIn;

      // Set checkOut
      const nextCheckOut = moment(check_in)
        .add(2, 'month')
        .endOf('month')
        .format('YYYY-MM-DD')

      self.check_out = nextCheckOut;
    },

    prevMonth() {
      const check_in = self.check_in;

      // Set checkIn
      const prevCheckIn = moment(check_in)
        .subtract(1, 'month')
        .startOf('month')
        .format('YYYY-MM-DD');

      self.check_in = prevCheckIn;

      // Set checkOut
      const prevCheckOut = moment(check_in)
        .endOf('month')
        .format('YYYY-MM-DD')

      self.check_out = prevCheckOut;
    },

    errorHandler(error) {
      self.setState("error")
      return Promise.reject(error);
    },

    clear() {
      detach(self);
    },

    setState(state) {
      self.state = state;
      return self;
    },

    resetStore(response) {
      const { status, data } = response;

      if (status === 200)
        applySnapshot(self, data.data)

      return self;
    },

    findOne(day) {
      return resolveIdentifier(DailyPrice, self, day)
    }
  }))

export default PricesStore;
