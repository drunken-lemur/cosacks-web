import { types } from "mobx-state-tree";

export const Pagination = types.model("Pagination", {
  page: types.optional(types.number, 1),
  limit: types.optional(types.number, 25),
  is_last: types.optional(types.boolean, false)
})
