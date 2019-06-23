import { types, getParent } from 'mobx-state-tree';

import { Address } from './Address';
import { Image } from './Image';
import { Preview } from './Preview';
import { Price } from './Price';
import { Specialization } from './Specialization';
import { Contact } from './Contact';
import { Distance } from './Distance';
import { HotelsHint } from './HotelsHint';
import { Region } from './Region';
import { Amenity } from './Amenity';

export const Hotel = types
  .model('Hotel', {
    id: types.identifier,
    slug: types.string,
    address: Address,
    name: types.string,
    rating: types.number,
    price: types.maybeNull(Price),
    description: types.string,
    email: types.maybeNull(types.string),
    check_in_time: types.optional(types.string, '12:00'),
    check_out_time: types.optional(types.string, '10:00'),
    children_from: types.optional(types.integer, 0),
    images: types.optional(types.array(Image), []),
    previews: types.optional(types.array(Preview), []),
    specializations: types.optional(types.array(Specialization), []),
    amenities: types.optional(types.array(Amenity), []),
    distances: types.optional(types.array(Distance), []),
    contacts: types.optional(types.array(Contact), []),
    hints: types.maybeNull(types.array(HotelsHint)),
    region: types.maybeNull(Region),
    state: types.maybeNull(types.enumeration(['pending', 'done', 'error']))
  })
  .views(self => ({
    get store() {
      return getParent(self);
    },

    get hasImages() {
      return self.images.length > 0;
    },

    get hasSpecializations() {
      return self.specializations.length > 0;
    }
  }));
