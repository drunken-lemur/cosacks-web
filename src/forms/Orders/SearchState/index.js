import BaseState from 'Forms/BaseState';
import { reaction } from 'mobx';

import fields from './fields';

class SearchState extends BaseState {
  constructor(...props) {
    super(...props);

    reaction(
      () => this.$('hotel.address').value,
      address => this.setAddress(address)
    );
  }

  setAddress = (address = undefined) => {
    if (!address) return;

    this.$('address').set(address);
  };

  options() {
    return {
      showErrorsOnClear: false,
      showErrorsOnChange: false,
      showErrorsOnSubmit: true,
      validateOnChange: true
    };
  }
}

export { fields };

export default SearchState;
