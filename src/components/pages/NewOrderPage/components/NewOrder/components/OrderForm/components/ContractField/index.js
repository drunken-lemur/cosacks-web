import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Field, Input } from 'forms';

@observer
class ContractField extends React.Component {
  render() {
    const { field, ...rest } = this.props;

    return <Field field={field} component={Input} {...rest} />;
  }
}

ContractField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  field: PropTypes.object.isRequired
};

export default styled(ContractField)``;
