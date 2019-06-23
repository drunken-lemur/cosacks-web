import { types } from "mobx-state-tree";
import { ImageVersion} from "./ImageVersion";

export const Preview = types.model("Preview", {
  url: types.string,
  thumb: ImageVersion,
});
