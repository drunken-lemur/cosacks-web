import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { DateRangePicker } from 'forms';

@observer
class DatesField extends React.Component {
  render() {
    const { checkIn, checkOut, ...rest } = this.props;

    return (
      <DateRangePicker
        checkIn={checkIn}
        checkOut={checkOut}
        isOpened={true}
        {...rest}
      />
    );
  }
}

DatesField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  checkIn: PropTypes.object.isRequired,
  checkOut: PropTypes.object.isRequired
};

export default styled(DatesField)``;
