import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';

import { NavLink } from 'react-router-dom';
import { typography, flexCenterBetween } from 'theme/mixins';

const Wrapper = styled.div`
  width: 222px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 12px 16px 12px 15px;
  box-shadow: 0 2px 6px 0 rgba(36, 95, 119, 0.21);
`;

const Title = styled.div`
  color: #4a515c;
  margin-bottom: 12px;
  ${typography(16, 18, 500)};
`;

const Description = styled.div`
  color: #6b707b;
  ${typography(12, 15)};
`;

const Address = styled(Description)`
  margin-bottom: 12px;
`;

const TimeWrapper = styled(Description)`
  ${flexCenterBetween()};
`;

const Time = styled(Description)``;

const Phone = styled(Description)`
  margin: 16px 0 12px;
`;

const HotelUrl = styled(NavLink)`
  color: #3c6f9d;
  text-decoration: none;
  ${typography(13, 20, 500)};
`;

@inject('hotelsInfo')
@observer
class Hotel extends React.Component {
  @computed get isFetched() {
    const { hotelsInfo } = this.props;
    return hotelsInfo.data;
  }

  @computed get hotelPhone() {
    const { hotelsInfo } = this.props;
    const contacts = hotelsInfo.data.contacts;

    const phone = contacts.toJSON().find(contact => contact.type === 'phone');

    return phone ? phone.value : null;
  }

  render() {
    if (!this.isFetched) return null;

    const { hotelsInfo, ...rest } = this.props;

    const hotel = hotelsInfo.data;
    const hotelUrl = ['https://sanatory.ru/hotel', hotel.slug].join('/');

    return (
      <Wrapper {...rest}>
        <Title>{hotel.name}</Title>

        <Address>{hotel.address.location}</Address>

        <TimeWrapper>
          <Time>Заезд с {hotel.check_in_time}</Time>・
          <Time>Выезд до {hotel.check_out_time}</Time>
        </TimeWrapper>

        <Description>{hotel.description}</Description>

        <Phone>{this.hotelPhone}</Phone>

        <HotelUrl to={hotelUrl}>Подробное описание</HotelUrl>
      </Wrapper>
    );
  }
}

Hotel.defaultProps = {
  className: ''
};

Hotel.propTypes = {
  className: PropTypes.string
};

export default styled(Hotel)``;
