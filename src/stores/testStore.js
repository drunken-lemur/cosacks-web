import { observable, action } from 'mobx';

class TestStore {
  @observable value = '';

  @action onChange = e => {
    this.value = e.target.value;
  };
}

export default new TestStore();
