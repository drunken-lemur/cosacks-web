import { path } from 'ramda';
import { Auth } from 'services';
import { userStore } from 'stores';
import { observable, action, reaction, computed } from 'mobx';

class AuthStore {
  @observable errors;
  @observable inProgress;
  @observable token = window.localStorage.getItem('jwt');

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }

  @computed get isAuthenticated() {
    return !!this.token;
  }

  @action setToken = token => {
    this.token = token;
  };

  @action login = (email, password, remember) => {
    this.inProgress = true;
    this.errors = undefined;

    return Auth.login(email, password, remember)
      .then(({ token, ...body }) => {
        this.setToken(token);

        return body;
      })
      .then(this.pullCurrentUser)
      .catch(
        action(err => {
          this.errors = {
            login: path(['response', 'body', 'error'])(err)
          };
          throw err;
        })
      )
      .finally(
        action(() => {
          this.inProgress = false;
        })
      );
  };

  @action pullCurrentUser() {
    userStore.loadingUser = true;

    return Auth.currentUser()
      .then(
        action(({ data }) => {
          userStore.setCurrentUser(data);
        })
      )
      .finally(
        action(() => {
          userStore.loadingUser = false;
        })
      );
  }

  @action logout = () => {
    this.setToken(undefined);
    userStore.forgetUser();

    return Promise.resolve();
  };
}

export default new AuthStore();
