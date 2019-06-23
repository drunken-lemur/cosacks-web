import { types } from "mobx-state-tree";

const Hotel = types.model("Hotel", {
  id: types.identifier,
})

const Order = types.model("Order", {
  id: types.identifier,
  order_code: types.string,
  price: types.maybeNull(types.number),
  state: types.maybeNull(
    types.enumeration(
      ["created", "booked", "confirmed", "cancelled"]
    )
  ),
  hotel: types.maybeNull(Hotel)
})

export { Order }
