import { authStore } from 'stores';
import FormStore from 'stores/FormStore';
import { reaction } from 'mobx';

class Form extends FormStore {
  constructor() {
    super(
      {
        fields: ['email', 'password', 'remember', 'test'],

        rules: {
          email: 'required|email|string|between:5,25',
          password: 'required|string|between:5,25'
        }
      },
      {
        hooks: {
          onSuccess: form => {
            const { email, password, remember } = form.values();

            authStore.login(email, password, remember);
          },
          onError: form => {
            console.log('All form errors', form.errors());
          }
        }
      }
    );

    reaction(
      () => this.$fields,
      $fields => console.log('this.fields, fields', this.$fields, $fields)
    );
  }
}

export default Form;
