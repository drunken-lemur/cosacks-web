import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BedSelector, Insurance, Slot } from './components';
import { ExtraSeats, MainSeats } from './components';

const Wrapper = styled.div`
  ${BedSelector} {
    margin-bottom: 33px;
  }

  ${Insurance} {
    margin-bottom: 33px;
  }

  ${Slot} + ${Slot} {
    margin-top: 10px;
  }
`;

class BookingForm extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { insurance, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {false && <Insurance {...insurance} />}

        <MainSeats />
        <ExtraSeats />
      </Wrapper>
    );
  }
}

export default styled(BookingForm)``;
