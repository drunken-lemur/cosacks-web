import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Top, Tabs, FilterBar, Table } from './components';

const Wrapper = styled.div``;

const StyledTabs = styled(Tabs)`
  margin: 29px 0 32px;
`;

const StyledFilterBar = styled(FilterBar)`
  margin-bottom: 39px;
`;

class Orders extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    ),
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
    filters: [],
    orders: []
  };

  render() {
    const { filters, orders, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Top />
        <StyledTabs />
        <StyledFilterBar filters={filters} />
        <Table orders={orders} />
      </Wrapper>
    );
  }
}

export default styled(Orders)``;
