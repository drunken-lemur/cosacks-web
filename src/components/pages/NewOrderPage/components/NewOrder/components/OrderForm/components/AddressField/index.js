import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Field, Address } from 'forms';

@observer
class AddressField extends React.Component {
  render() {
    const { field, ...rest } = this.props;

    return <Field field={field} component={Address} {...rest} />;
  }
}

AddressField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  field: PropTypes.object.isRequired
};

export default styled(AddressField)``;
