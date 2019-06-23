import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import { typography } from 'theme/mixins';
import _flatten from 'lodash/flatten';

import { RoomType } from './components';

import HotelsPricing from 'Stores/HotelsStore/PricingStore';

const Wrapper = styled.div`
  ${RoomType} + ${RoomType} {
    margin-top: 15px;
  }
`;

const Title = styled.div`
  color: #979ba0;
  margin-bottom: 13px;
  ${typography(14, 17, 700)};
`;

@inject('orderStore')
@observer
class TariffSelector extends React.Component {
  constructor(props) {
    super(props);

    this.hotelsPricing = HotelsPricing.create();
  }

  componentDidMount() {
    const { orderStore } = this.props;

    const travellers = [
      {
        age_group: 'adult',
        age: 0
      }
    ];

    const check_in = '2019-06-17';
    const check_out = '2019-06-24';

    const params = Object.assign(
      { travellers },
      { check_in },
      { check_out },
      orderStore.data.hotel.toJSON()
    );

    this.hotelsPricing.fetch(params);
  }

  @computed get isFetched() {
    return !!this.hotelsPricing.data;
  }

  render() {
    if (!this.isFetched) return null;

    const { ...rest } = this.props;
    const { room_types } = this.hotelsPricing.data.toJSON();

    const listRoomTypes = room_types.map(roomType =>
      roomType.tariffs.map(tariff => {
        return (
          <RoomType key={tariff.id} room_type={roomType} tariff={tariff} />
        );
      })
    );

    return (
      <Wrapper {...rest}>
        <Title>Выберете номер</Title>

        <div>{_flatten(listRoomTypes)}</div>
      </Wrapper>
    );
  }
}

TariffSelector.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func
};

TariffSelector.defaultProps = {
  className: ''
};

export default styled(TariffSelector)``;
