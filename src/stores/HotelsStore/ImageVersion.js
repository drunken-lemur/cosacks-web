import { types } from "mobx-state-tree";

export const ImageVersion = types.model("ImageVersion", {
  url: types.string,
})
