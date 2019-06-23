import { types } from "mobx-state-tree";
import _clone from "lodash/clone";
import _pick from "lodash/pick";
import { pluralize } from "Utils/pluralize";

import { Tariff } from "./Tariff";
import { RoomTypeImage } from "./RoomTypeImage";
import { Amenity } from "./Amenity";

export const RoomType = types.model("RoomType", {
  id: types.identifier,
  name: types.string,
  area: types.number,
  rm_count: types.number,
  beds: types.number,
  extra_beds: types.number,
  images: types.maybeNull(types.array(RoomTypeImage)),
  tariffs: types.optional(types.array(Tariff), []),
  amenities: types.maybeNull(types.array(Amenity))
})
.views(self => ({
  get roomsDesc() {
    return [
      self.rm_count,
      pluralize(self.rm_count, 'комната', 'комнаты', 'комнат')
    ].join(' ');
  },

  get tariffsDesc() {
    return [
      self.tariffs.length,
      pluralize(self.tariffs.length, 'тариф', 'тарифа', 'тарифов')
    ].join(' ');
  },

  get areaDesc() {
    return ['общая площадь', self.area, 'кв. м.'].join(' ');
  },

  get bedsDesc() {
    let str;

    if (self.extra_beds > 0) {
      str = [
        self.beds,
        pluralize(self.beds, 'основное', 'основных', 'основных'),
        'и',
        self.extra_beds,
        pluralize(self.extra_beds, 'дополнительное спальное место', 'дополнительных спальных мест', 'дополнительных спальных мест')
      ]
    } else {
      str = [
        self.beds,
        pluralize(self.beds, 'основное место', 'основных мест', 'основных мест')
      ]
    }

    return str.join(' ');
  }
}))
.actions(self => ({
  toForm() {
    let data = self.toJSON();
    data = _clone(data);
    data = _pick(data, ['id', 'name', 'beds', 'extra_beds'])

    return data;
  }
}));
