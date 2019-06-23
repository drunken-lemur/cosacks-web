import { types } from "mobx-state-tree";

const PriceComposition = types.model('PriceComposition', {
  min: types.number,
  max: types.number,
  avg: types.number
})

export const Pricing = types.model("Pricing", {
  price: types.maybeNull(PriceComposition),
  discount_price: types.maybeNull(PriceComposition),
  discount_percent: types.optional(types.integer, 0),
  min: types.number,
  max: types.number,
  avg: types.number
})
