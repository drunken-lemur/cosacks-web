import _clone from "lodash/clone";
import _findIndex from "lodash/findIndex";

import moment from "Utils/moment";

function getPricesForPeriod({ tariff, prices, check_in, check_out }) {
  const { billing_hour } = tariff;
  const billingShift = billing_hour === 'day' ? 1 : 0;

  const data = _clone(prices);
  const defaultValue = data.slice(0, 1);

  if (!check_in || !check_out) return defaultValue;

  const firstDate = moment(check_in).format("Y-MM-DD");
  const firstIndex = _findIndex(data, (price) => price.day === firstDate);
  if (firstIndex < 0) return defaultValue;

  const lastDate = moment(check_out).format("Y-MM-DD");
  const lastIndex = _findIndex(data, (price) => price.day === lastDate);
  if (lastIndex < 0) return defaultValue;

  return data.slice(firstIndex, lastIndex + billingShift);
}

function calculatePrice(params) {
  const { check_in, check_out, tariff, prices, discount_percent } = params;

  if (!check_in || !check_out)
    return { amount: 0, currency: 'RUB' }

  // Price
  const pricesPerDay = getPricesForPeriod({
    tariff, prices, check_in, check_out
  });

  const amount = pricesPerDay
    .reduce((sum, p) => sum + p.price, 0)

  const discount_amount = amount * discount_percent * 0.01;

  const currency = 'RUB';

  const price = {
    amount: amount,
    currency: currency
  }

  const discount_price = {
    amount: amount - discount_amount,
    currency: currency
  }

  return { price, discount_price }
}

export default calculatePrice;
