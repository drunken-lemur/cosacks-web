import { types } from "mobx-state-tree";

export const Traveller = types.model("Traveller", {
  age_group: types.string,
  age: types.number,
  gender: types.optional(types.enumeration(["male", "female"]), 'male'),
  first_name: types.maybeNull(types.string),
  last_name: types.maybeNull(types.string)
});

export const Rate = types.model("Rate", {
  type: types.string,
  count: types.number,
  occupation: types.string,
  age_group: types.string
});

export const TariffSlot = types.model("TariffSlot", {
  traveller: Traveller,
  rate: Rate
});
