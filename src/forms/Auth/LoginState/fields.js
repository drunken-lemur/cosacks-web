const fields = ['email', 'password', 'remember'];

const placeholders = {
  email: 'Введите e-mail',
  password: 'Введите пароль'
};

const labels = {
  email: 'E-mail',
  password: 'Пароль',
  remember: 'Запомнить меня'
};

const extra = {};

const rules = {
  email: 'required|email|string|between:3,25',
  password: 'required|string|between:6,25'
};

const types = {
  remember: 'checkbox',
  password: 'password'
};

const values = {
  email: 'some@some.com',
  password: 'password123'
};

export default {
  fields,
  labels,
  placeholders,
  rules,
  types,
  values,
  extra
};
