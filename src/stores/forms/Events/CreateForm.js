import BaseState from 'Forms/BaseState';

const fields = ['name', 'description', 'start', 'end'];

const placeholders = {
  name: 'Name',
  description: 'Description',
  start: 'Start',
  end: 'End'
};

const labels = {};

const extra = {};

const rules = {};

const types = {};

const values = {};

const output = {};

class CreateForm extends BaseState {
  constructor(hooks) {
    super({
      fields,
      labels,
      placeholders,
      rules,
      types,
      values,
      extra,
      output
    }, {hooks});
  }

  options() {
    return {
      showErrorsOnClear: false,
      showErrorsOnChange: false,
      showErrorsOnSubmit: true,
      validateOnChange: true
    };
  }
}

export default CreateForm;
