import { observable, action, computed } from 'mobx';

class UserStore {
  @observable currentUser;
  @observable loadingUser;
  @observable updatingUser;

  @computed get name() {
    const { first_name = '', last_name = '' } = this.currentUser || {};

    return `${first_name} ${last_name}`;
  }

  @action setCurrentUser = user => {
    this.currentUser = user;
  };

  @action forgetUser = () => {
    this.currentUser = undefined;
  };
}

export default new UserStore();
