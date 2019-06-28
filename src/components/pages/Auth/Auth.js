import React from 'react';
import {PageGroup} from 'components/common';

import {LoginPage, RegistrationPage} from './pages';

const routes = [
  {
    exact: true,
    path: '/auth/login',
    component: LoginPage
  },
  {
    exact: true,
    path: '/auth/registration',
    component: RegistrationPage
  }
];

// const Auth = () => 'Auth';
const Auth = () => <PageGroup {...routes}/>;

export default Auth;
