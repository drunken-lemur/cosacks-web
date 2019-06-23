import {applySnapshot, types} from 'mobx-state-tree';
import instance from 'Connection/instance';
import store from 'store';
import _pick from 'lodash/pick';

import {Payload} from './Payload';
import {verifyJWT} from 'Utils/jwt';

const USER_ATTRS = [
  'id',
  'email',
  'first_name',
  'last_name',
  'middle_name',
  'role',
  'token',
  'payload'
];

const AuthStore = types
  .model('AuthStore', {
    email: types.maybe(types.string),
    first_name: types.maybe(types.string),
    last_name: types.maybe(types.string),
    token: types.maybe(types.string),
    payload: types.maybe(Payload)
  })
  .views(self => ({
    get isAuthenticated() {
      return self.payload && !self.payload.expired;
    }
  }))
  .actions(self => ({
    afterCreate() {
      const data = self.readFromLocalStorage();
      if (!data) return;

      self.setDefaultsHeader(data);
      self.updateUser(data);
    },

    login(values = {}) {
      const data = {user: values};

      const config = {
        headers: {Authorization: null}
      };

      return instance
        .post('/api/auth/sign_in', data, config)
        .then(response => verifyJWT(response))
        .then(data => self.setDefaultsHeader(data))
        .then(data => self.writeToLocalStorage(data))
        .then(data => self.updateUser(data))
        .catch(error => console.log(error));
    },

    logout() {
      instance
        .delete('/api/auth/sign_out')
        .catch(error => console.log('Catch: ', error))
        .then(response => {
          store.remove('authStore');
          self.updateUser({});
          self.unsetDefaultHeader();
        });
    },

    fetchProfile(data) {
      instance
        .get('/api/profile')
        .then(response => self.assignSettings(response));
    },

    assignSettings(response) {
      const {setting} = response.data.client;
      applySnapshot(self.setting, setting);
    },

    updateUser(data) {
      data = _pick(data, USER_ATTRS);
      applySnapshot(self, data);

      return data;
    },

    setDefaultsHeader(data) {
      const {token} = data;
      instance.defaults.headers.common['Authorization'] = [
        'Bearer',
        token
      ].join(' ');

      return data;
    },

    unsetDefaultHeader() {
      instance.defaults.headers.common['Authorization'] = undefined;
    },

    writeToLocalStorage(data) {
      const json = _pick(data, USER_ATTRS);
      store.set('authStore', json);

      return data;
    },

    readFromLocalStorage() {
      return store.get('authStore');
    }
  }));

export default AuthStore;
