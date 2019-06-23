import { types } from "mobx-state-tree";
import { ImageVersion} from "./ImageVersion";

export const RoomTypeImage = types.model("RoomTypeImage", {
  url: types.string,
  thumb: ImageVersion,
  landscape_big: ImageVersion,
  landscape_small: ImageVersion,
});
