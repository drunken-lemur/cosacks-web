import { types } from "mobx-state-tree";
import { ImageVersion} from "./ImageVersion";

export const Image = types.model("Image", {
  url: types.string,
  thumb: ImageVersion,
  landscape_big: ImageVersion,
  landscape_small: ImageVersion
});
