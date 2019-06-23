import React from 'react';
import { pathOr } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display } from 'theme/mixins';
import { setDisplayName } from 'recompose';
import { Provider, inject, observer } from 'mobx-react';
import { computed } from "mobx";
import { Redirect, withRouter } from 'react-router-dom';

import loginBackground from 'assets/images/login-background.svg';
import LoginForm from './components/LoginForm';

import LoginState, { fields } from "Forms/Auth/LoginState";

const Wrapper = styled.div`
  min-height: 100vh;
  background-size: cover;
  ${display('flex', 'center', 'flex-end')};
  background-image: url(${loginBackground});
  background-position: -550px 0;

  ${LoginForm} {
    width: 100%;
    margin: 44px;
  }
`;

const LoginWrapper = styled.div`
  width: 474px;
  height: 100vh;
  background: #fff;
  ${display('flex', 'center', 'center')};
`;

@setDisplayName('LoginPage')
@withRouter
@inject('authStore')
@observer
class LoginPage extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    const hooks = {
      onSuccess: this.onLoginSuccess,
      onError: this.onLoginError
    }

    this.loginState = new LoginState(fields, { hooks })
  }

  @computed get isAuthenticated() {
    const { authStore } = this.props;
    return authStore.isAuthenticated;
  }

  onLoginSuccess = (form) => {
    const { authStore } = this.props;
    const values = form.values();

    authStore.login(values);
  }

  onLoginError = (form) => {
    console.log(form.errors())
  }

  render() {
    const { className, authStore, userStore, location, ...rest } = this.props;
    const fromUrl = pathOr('/', ['state', 'from'], location);

    if (this.isAuthenticated)
      return <Redirect to={fromUrl} />

    return (
      <Provider loginState={this.loginState}>
        <Wrapper className={className} {...rest}>
          <LoginWrapper>
            <LoginForm />
          </LoginWrapper>
        </Wrapper>
      </Provider>
    );
  }
}

export default LoginPage;
