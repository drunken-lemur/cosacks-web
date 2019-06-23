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
  currentUser: () => Api.get('/current_user')
};

export default Auth;
