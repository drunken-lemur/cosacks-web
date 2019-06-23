import React from 'react';
import PropTypes from 'prop-types';
import { BlockShadow } from 'atoms';
import styled from 'styled-components';

import { ReservationGroup, Title, Total } from './components';

const Wrapper = styled(BlockShadow)`
  width: 620px;

  & > {
    ${ReservationGroup} {
      margin-top: 20px;
    }
  }

  ${Total} {
    margin-top: 20px;
  }
`;

class Center extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  onSubmit = () => null;

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Title count={2}>Мой заказ</Title>

        <ReservationGroup />

        <ReservationGroup />

        <Total total={70000} onSubmit={this.onSubmit} />
      </Wrapper>
    );
  }
}

export default styled(Center)``;
