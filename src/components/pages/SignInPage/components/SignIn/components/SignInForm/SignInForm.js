import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import {Form, Field, Input, Button} from 'forms';

const Wrapper = styled.div`
  ${Button},
  ${Input} {
    margin: 8px;
  }
`;

@inject('signInForm')
@observer
class SignInForm extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    signInForm: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {signInForm, ...rest} = this.props;

    return (
      <Wrapper {...rest}>
        <div>SignInForm</div>
        
        <Form form={signInForm}>
          <Field component={Input} field={signInForm.$('email')} />

          <Field component={Input} field={signInForm.$('password')} />

          <Button type="submit">Sign in</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default styled(SignInForm)``;
