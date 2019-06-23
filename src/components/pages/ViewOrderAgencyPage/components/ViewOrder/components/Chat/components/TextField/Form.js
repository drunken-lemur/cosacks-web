import FormStore from 'stores/FormStore';

class Form extends FormStore {
  constructor() {
    super(
      {
        fields: ['message']
      },
      {
        hooks: {
          onSuccess(form) {
            console.log('Form Values!', form.values());
          },
          onError(form) {
            console.log('All form errors', form.errors());
          }
        }
      }
    );
  }
}

export default Form;
