import BaseState from 'Forms/BaseState';

const fields = ['email', 'password'];

const placeholders = {
  email: 'email',
  password: 'password',
};

const labels = {
  email: 'Email:',
  password: 'Password:'
};

const extra = {};

const rules = {};

const types = {
  password: 'password'
};

const values = {};

const output = {};

class SignInForm extends BaseState {
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
}

export default SignInForm;
