import {types} from 'mobx-state-tree';

const Event = types.model('Event', {
  _id: types.optional(types.string, ''),
  name: types.string,
  description: types.string,
  start: types.string,
  end: types.string,
});

export default Event;
