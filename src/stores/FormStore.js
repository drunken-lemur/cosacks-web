import validatorjs from 'validatorjs';
import { Form as MobxForm } from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';

class FormStore extends MobxForm {
  plugins() {
    return {
      dvr: dvr(validatorjs)
    };
  }

  options() {
    return {
      validateOnInit: false,
      showErrorsOnReset: false,
      showErrorsOnClear: false
    };
  }
}

export default FormStore;
