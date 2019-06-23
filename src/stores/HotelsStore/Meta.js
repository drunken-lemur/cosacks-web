import { types } from "mobx-state-tree";

import { Address } from "./Address";
import { Specialization } from "./Specialization";
import { Pagination } from "./Pagination";
import { Seo } from "./Seo";

export const Meta = types.model("Meta", {
  address: types.maybeNull(Address),
  max_price: types.optional(types.number, 0),
  min_price: types.optional(types.number, 0),
  specializations: types.optional(types.array(Specialization), []),
  seo: Seo,
  paginate: types.optional(Pagination, {})
});
