import BaseState from "Forms/BaseState";
import { action, observable, computed } from 'mobx';

import correctDatesByMinDays from './correctDatesByMinDays';
import calculatePrice from './calculatePrice';
import inpersonate from './inpersonate';

import fields from "./fields";

class BookingState extends BaseState {
  // Hotel
  @observable.ref hotel = undefined;

  @action setHotel(hotel) {
    this.hotel = hotel;
  }

  @action unsetHotel(hotel) {
    this.hotel = undefined;
  }

  // RoomType
  @observable.ref room_type = undefined;

  @action setRoomType(room_type) {
    this.room_type = room_type;
  }

  @action unsetRoomType(room_type) {
    this.room_type = undefined;
  }

  // Tariff
  @observable.ref tariff = undefined;

  @action setTariff(tariff) {
    this.tariff = tariff;
  }

  @action unsetTariff(tariff) {
    this.tariff = undefined;
  }

  // Availability
  @action setAvailability({ hotel, room_type, tariff }) {
    this.setHotel(hotel);
    this.setRoomType(room_type);
    this.setTariff(tariff)
  }

  @action unsetAvailability() {
    this.unsetHotel();
    this.unsetRoomType();
    this.unsetTariff();
  }

  @computed get hasAvailability() {
    return !!this.hotel && !!this.room_type && !!this.tariff;
  }

  // Beds count
  @computed get bedsCount() {
    return 2
  }

  @computed get maxBedsCount() {
    return this.hasAvailability
      ? this.room_type.beds
      : 0
  }

  @computed get maxExtraBedsCount() {
    return this.hasAvailability
      ? this.room_type.extra_beds
      : 0
  }

  @computed get extraBedsCount() {
    return 1
  }

  // Dates
  @action setDatesPeriod({ check_in, check_out }) {
    // Correct and set dates
    const tariff = this.tariff;

    const { checkIn, checkOut } = !!tariff && !!check_in && !!check_out
      ? correctDatesByMinDays({ tariff, check_in, check_out })
      : { checkIn: check_in, checkOut: check_out }

    this.set({ check_in: checkIn, check_out: checkOut });


    // Run dates change handlers
    this.datesChangeHandlers({ check_in: checkIn, check_out: checkOut });
  }

  datesChangeHandlers({ check_in, check_out }) {
    //
  }

  // Prices per day
  @observable.ref prices;

  @observable discount_percent;

  @computed get hasDiscount() {
    const value = Number(this.discount_percent);
    return value && value > 0;
  }

  setPrices({ prices, discount_percent }) {
    let data = prices.toJSON();
    this.prices = Object.freeze(data);

    this.discount_percent = discount_percent
  }

  unsetPrices() {
    this.prices = undefined;
    this.discount_percent = undefined;
  }

  // Travellers
  @computed get travellersOpts() {
    const travellers = this.$('travellers').value;
    return travellers.map(t => inpersonate(t))
  }

  // Prices
  calcPrice({ check_in, check_out }) {
    const defaultValue = {
      price: { amount: 0, currency: 'RUB' },
      discount_price: { amount: 0, currency: 'RUB' }
    }

    if (!this.prices) return defaultValue;

    const tariff = this.tariff;
    const prices = this.prices || [];
    const discount_percent = this.discount_percent || 0;

    const { price, discount_price }  = check_in && check_out
      ? calculatePrice({ check_in, check_out, tariff, prices, discount_percent })
      : defaultValue

    this.setPrice({ price, discount_price })
  }

  setPrice({ price, discount_price }) {
    this.update({ price, discount_price })
  }

  unsetPrice() {
    const price = { amount: 0, currency: 'RUB' };
    this.update({ price });
  }
}

export { fields };

export default BookingState;
