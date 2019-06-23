import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { Button, Input, Checkbox } from 'forms';
import { typography, ruiClass } from 'theme/mixins';

import { NavLink } from 'react-router-dom';
import { Form, Field } from 'forms';
import Loader_ from 'rambler-ui/Loader';

const Wrapper = styled.div`
  ${Button} {
    width: 125px;
  }

  ${Field} {
    padding-bottom: 33px;

    label {
      color: #4a515c;
      padding-bottom: 11px;
      display: inline-block;
      text-transform: uppercase;
      ${typography(12, 15, 700)};
    }
  }
`;

const Loader = styled(Loader_)`
  ${ruiClass('rui-Loader-loader')} {
    min-height: auto;
  }
`;

const Title = styled.div`
  color: #9cb4ca;
  text-align: center;
  margin-bottom: 59px;
  ${typography(40, 48, 700)};
`;

const ForgetWrapper = styled.div`
  position: relative;
`;

const Forget = styled(NavLink)`
  top: 0;
  right: 0;
  color: #3c6f9d;
  position: absolute;
  ${typography(14, 16)};
  text-decoration: none;
`;

const RememberField = styled(Field)`
  margin-left: 50px;
  align-items: center;
  display: inline-flex;
  flex-direction: row-reverse;

  label {
    color: #4a515c;
    ${typography(14, 16)};
  }
`;

@setDisplayName('LoginForm')
@inject('loginState')
@observer
class LoginForm extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { loginState, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Loader>
          <Title>Вход</Title>

          <Form form={loginState}>
            <Field
              field={loginState.$('email')}
              component={Input}
            />

            <ForgetWrapper>
              <Forget to="/forget">Забыли пароль?</Forget>
            </ForgetWrapper>

            <Field
              field={loginState.$('password')}
              component={Input}
            />

            <Button type="submit">
              Войти
            </Button>

            <RememberField
              field={loginState.$('remember')}
              component={Checkbox}
            />
          </Form>
        </Loader>
      </Wrapper>
    );
  }
}

export default styled(LoginForm)``;
