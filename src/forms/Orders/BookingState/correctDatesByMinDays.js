import moment from "Utils/moment";

function correctDatesByMinDays({ tariff, check_in, check_out }) {
  let { stay_period, billing_hour } = tariff;

  const min_days = stay_period.min_days || 0;
  const billingShift = billing_hour === 'day' ? 1 : 0;

  const calcCheckOut = moment(check_in).add(min_days + billingShift, 'day');

  const checkIn = moment(check_in).toDate()


  let checkOut = moment(check_out);
  checkOut = moment.max(checkOut, calcCheckOut).toDate();

  return { checkIn, checkOut };
}

export default correctDatesByMinDays;
