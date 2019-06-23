import { types } from "mobx-state-tree";

import { Address } from "./Address";

export const Region = types.model("Region", {
  name: types.string,
  slug: types.string,
  address: Address,
});
