import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {Auth} from 'services';
import SignInFormState from 'stores/forms/Auth/SignInForm';

import {SignInForm} from './components';

const Wrapper = styled.div``;

@withRouter
@observer
class SignIn extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  onSubmit = form => {
    const {email, password} = form.values();

    return Auth.authenticate({email, password})
      .catch(error => console.log({error}));
  };

  onError = form => {

  };

  // signup = () => {
  //   const {email, password} = this.state;
  //
  //   return client.service('users')
  //     .create({email, password})
  //     .then(() => this.login());
  // };

  constructor(props) {
    super(props);

    const {onSubmit, onError} = this;

    this.signInForm = new SignInFormState({onSubmit, onError});
  }

  render() {
    const {signInForm} = this;
    const {...rest} = this.props;

    return (
      <Provider {...{signInForm}}>
        <Wrapper {...rest}>
          <SignInForm/>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(SignIn)``;
