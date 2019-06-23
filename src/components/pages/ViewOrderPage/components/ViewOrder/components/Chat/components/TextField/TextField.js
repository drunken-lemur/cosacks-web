import React from 'react';
import { GoArrow } from 'icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Field, Input, Button } from 'forms';

import FormState from './Form';

const Wrapper = styled.div`
  &&& {
    padding: 16px 24px;

    ${Input} {
      input {
        height: 44px;
        background: #f7f8fb;
        border: 1px solid #d1d5db;
      }
    }

    ${Form} {
      position: relative;

      ${Button} {
        top: 0;
        right: 0;
        width: 44px;
        height: 44px;
        position: absolute;

        border-radius: 0 4px 4px 0;
      }
    }
  }
`;

class TextField extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    this.form = new FormState();
  }

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Form form={this.form}>
          <Field
            name="message"
            component={Input}
            autoComplete="off"
            placeholder="Ваше сообщение…"
          />
          <Button type="submit">
            <GoArrow />
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default styled(TextField)``;
