import { types } from "mobx-state-tree";

const MetaTag = types.model("MetaTag", {
  content: types.string,
  property: types.maybeNull(types.string),
  name: types.maybeNull(types.string)
})

export const Seo = types.model("Seo", {
  title: types.string,
  keywords: types.maybeNull(types.array(types.string)),
  meta_tags: types.maybeNull(types.array(MetaTag))
})
