import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import {Button, Field, Form, Input} from 'forms/index';

const Wrapper = styled.div`
  ${Button},
  ${Input} {
    margin: 8px;
  }
`;

@inject('createForm')
@observer
class EventForm extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
    className: PropTypes.string,
    createForm: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
    onClose: () => null
  };

  render() {
    const {createForm, onClose, ...rest} = this.props;

    return (
      <Wrapper {...rest}>
        CreateForm

        <Form form={createForm}>
          <Field field={createForm.$('name')} component={Input}/>

          <Field field={createForm.$('description')} component={Input}/>

          <Field field={createForm.$('start')} component={Input}/>

          <Field field={createForm.$('end')} component={Input}/>

          <Button type="submit">Create</Button>

          <Button onClick={onClose}>Close</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default styled(EventForm)``;
