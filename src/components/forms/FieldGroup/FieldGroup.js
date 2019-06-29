import React from 'react';
import {Field} from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';

@inject('form')
@observer
class FieldGroup extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired
  };

  render() {
    const {fields} = this.props;

    return !!fields && (
      <>
        {Object.keys(fields).map(name => (
          <Field key={name} name={name} component={fields[name]}/>
        ))}
      </>
    );
  }
}

export default styled(FieldGroup)``;
