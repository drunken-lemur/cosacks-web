import component from './';

export default [
  {
    component,
    name: 'example empty'
  },
  {
    component,
    name: 'example typed',
    props: {
      email: 'example@site.com',
      password: '12345'
    }
  },
  {
    component,
    name: 'example with errors',
    props: {
      email: 'example@site.com',
      password: '12345',
      errors: {
        email: 'Email is invalid or already taken',
        password: 'Minimum length is 8 characters.'
      }
    }
  },
  {
    component,
    name: 'example with mobx',
    props: {
      useStore: true
    }
  }
];
