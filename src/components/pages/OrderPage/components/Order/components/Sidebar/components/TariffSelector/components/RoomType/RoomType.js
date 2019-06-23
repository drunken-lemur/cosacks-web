import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
import { typography, flexCenterBetween } from 'theme/mixins';
import { pluralize } from 'Utils/pluralize';

const Wrapper = styled.div`
  width: 221px;
  height: 121px;
  border-radius: 4px;
  box-sizing: border-box;

  background-color: #fff;
  padding: 16px 15px 19px 18px;
  box-shadow: 0 2px 6px 0 rgba(36, 95, 119, 0.21);

  cursor: pointer;

  &:hover {
    border: 2px solid #5ab2d6;
    padding: 14px 13px 17px 16px;
  }

  ${p =>
    p.isSelected &&
    css`
      border: 2px solid #5ab2d6;
      padding: 14px 13px 17px 16px;
    `};
`;

const Title = styled.div`
  color: #4a515c;
  white-space: nowrap;
  ${typography(14, 17, 500)};
`;

const InnerWrapper = styled.div`
  margin-top: 15px;
`;

const FlexContainer = styled.div`
  ${flexCenterBetween()};
  & + & {
    padding-top: 7px;
  }
`;

const Label = styled.div`
  ${typography(13, 15)};
`;

const PriceLabel = styled(Label)`
  color: #6b707b;
`;

const Price = styled(Label)`
  color: #4a515c;
  ${typography(13, 16, 500)};
`;

const DaysLabel = styled(Label)`
  color: #979ba0;
`;

const Days = styled(Label)`
  opacity: 0.6;
  color: #4c4c4c;
`;

@inject('bookingState', 'hotelsInfo')
@observer
class RoomType extends React.Component {
  @computed get isSelected() {
    const { bookingState, tariff } = this.props;

    return bookingState.tariff && bookingState.tariff.id === tariff.id;
  }

  @computed get minDays() {
    const { tariff } = this.props;
    const count = tariff.stay_period.min_days || 0;

    let str = pluralize(count, 'дня', 'дней', 'дней');
    str = ['от', count, str].join(' ');

    return count > 0 ? str : null;
  }

  onClickHandler = e => {
    const { bookingState, hotelsInfo, room_type, tariff } = this.props;

    const options = {
      hotel: hotelsInfo.data,
      room_type: room_type,
      tariff: tariff
    };

    bookingState.hasAvailability && bookingState.unsetAvailability();

    bookingState.setAvailability(options);
  };

  render() {
    const { tariff, room_type, ...rest } = this.props;

    return (
      <Wrapper
        {...rest}
        onClick={this.onClickHandler}
        isSelected={this.isSelected}
      >
        <Title>{room_type.name}</Title>

        <Title>{tariff.name}</Title>

        <InnerWrapper>
          <FlexContainer>
            <PriceLabel>Цена</PriceLabel>
            <Price>от {formatPrice(tariff.discount_price)}</Price>
          </FlexContainer>

          {!!this.minDays && (
            <FlexContainer>
              <DaysLabel>Бронирование</DaysLabel>
              <Days>{this.minDays}</Days>
            </FlexContainer>
          )}
        </InnerWrapper>
      </Wrapper>
    );
  }
}

RoomType.propTypes = {
  className: PropTypes.string,
  room_type: PropTypes.object.isRequired,
  tariff: PropTypes.object.isRequired
};

RoomType.defaultProps = {
  onClick: () => null
};

export default styled(RoomType)``;
