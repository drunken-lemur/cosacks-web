import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import {Button, Field, Form, Input} from 'forms';

const Wrapper = styled.div``;

@inject('editForm')
@observer
class EditForm extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
    className: PropTypes.string,
    editForm: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: '',
    onClose: () => null
  };

  render() {
    const {editForm, onClose, ...rest} = this.props;

    return (
      <Wrapper {...rest}>
        EditForm

        <Form form={editForm}>
          <Field field={editForm.$('name')} component={Input}/>

          <Field field={editForm.$('description')} component={Input}/>

          <Field field={editForm.$('start')} component={Input}/>

          <Field field={editForm.$('end')} component={Input}/>

          <Button type="submit">Save</Button>

          <Button onClick={onClose}>Close</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default styled(EditForm)``;
