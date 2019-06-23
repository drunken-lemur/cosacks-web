import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HotelInfo } from 'molecules';
import HotelInfoFixtures from 'molecules/HotelInfo/fixtures'; // todo: remove fixtures include

import { PaymentInfo } from './components';
import PaymentInfoFixtures from './components/PaymentInfo/fixtures'; // todo: remove fixtures include

const Wrapper = styled.div`
  width: 320px;

  ${PaymentInfo} {
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
        <HotelInfo {...HotelInfoFixtures[0].props} />

        <PaymentInfo {...PaymentInfoFixtures[0].props} />
      </Wrapper>
    );
  }
}

export default styled(Sidebar)``;
