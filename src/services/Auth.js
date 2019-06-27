import {client} from 'utils';

import Api from './Api';

const Auth = {
  login: (email, password, remember) =>
    Api.post('/auth/sign_in ', {
      user: {
        email,
        password,
        remember
      }
    }),

  currentUser: () => Api.get('/current_user'),

  authenticate: ({login, password}) => login && password
    ? client.authenticate({strategy: 'local', login, password})
    : client.authenticate(),

  singOut: () => client.logout()
};

export default Auth;
