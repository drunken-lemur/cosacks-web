import {types} from 'mobx-state-tree';

const User = types.model('User', {
  _id: types.identifier,
  email: types.string,
  password: types.string,
  firstName: types.string,
  lastName: types.string,
  middleName: types.string,
  avatar: types.string,
  phone: types.string,
});

export default User;
