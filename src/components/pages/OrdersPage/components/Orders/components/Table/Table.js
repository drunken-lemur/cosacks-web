import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Head, Row } from './components';

const Wrapper = styled.div``;

const StyledHead = styled(Head)`
  padding-left: 19px;
  padding-right: 281px;
  margin-bottom: 15px;
`;

class Table extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        checkin: PropTypes.string,
        checkout: PropTypes.string,
        guests: PropTypes.shape({
          people: PropTypes.number,
          rooms: PropTypes.number
        }),
        sanatory: PropTypes.string,
        manager: PropTypes.string,
        changed: PropTypes.string,
        status: PropTypes.arrayOf([
          'reserved',
          'accepted',
          'canceled',
          'accepted1c',
          'error'
        ]),
        messages: PropTypes.number
      })
    )
  };

  static defaultProps = {
    className: '',
    orders: []
  };

  render() {
    const { orders, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <StyledHead />

        {orders.map(order => (
          <Row {...order} />
        ))}
      </Wrapper>
    );
  }
}

export default styled(Table)``;
