import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HotelInfo, OrderInfo, ReservationGroups } from './components';

const Wrapper = styled.div`
  width: 320px;

  ${OrderInfo},
  ${ReservationGroups} {
    margin-top: 20px;
  }
`;

class Sidebar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <HotelInfo />

        <OrderInfo />

        <ReservationGroups />
      </Wrapper>
    );
  }
}

export default styled(Sidebar)``;
