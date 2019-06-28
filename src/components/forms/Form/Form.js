import React from 'react';
import {noop} from 'utils';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import styled from 'styled-components';

const StyledForm = styled.form``;

class Form extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    form: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: '',
    form: {
      onReset: noop,
      onSubmit: noop
    }
  };

  render() {
    const { children, form, ...rest } = this.props;

    const { onSubmit, onReset } = form;

    return (
      <StyledForm {...{ ...rest, onSubmit, onReset }}>
        <Provider form={form}>
          <>{children}</>
        </Provider>
      </StyledForm>
    );
  }
}

export default styled(Form)``;
