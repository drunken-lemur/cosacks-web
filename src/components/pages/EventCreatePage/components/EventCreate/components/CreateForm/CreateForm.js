import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button,Form, Field, Input} from 'forms';
import {inject, observer} from 'mobx-react';

const Wrapper = styled.div``;


@inject('createForm')
@observer
class CreateForm extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {createForm, ...rest} = this.props;

    return (
      <Wrapper {...rest}>
        CreateForm
        <Form form={createForm}>
          <Field field={createForm.$('name')} component={Input}/>

          <Field field={createForm.$('description')} component={Input}/>

          <Field field={createForm.$('start')} component={Input}/>

          <Field field={createForm.$('end')} component={Input}/>

          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default styled(CreateForm)``;
