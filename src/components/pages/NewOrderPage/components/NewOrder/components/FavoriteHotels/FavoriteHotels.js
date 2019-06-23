import React from 'react';
import PropTypes from 'prop-types';
import { HotelCard } from 'molecules';
import styled from 'styled-components';
import { display } from 'theme/mixins';

const Wrapper = styled.div`
  width: 960px;
  flex-wrap: wrap;
  ${display('flex', 'center', 'space-between')};

  ${HotelCard}:nth-child(1n+3) {
    margin-top: 16px;
  }
`;

class FavoriteHotels extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    hotels: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        rating: PropTypes.number,
        address: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
      })
    )
  };

  static defaultProps = {
    className: '',
    hotels: []
  };

  render() {
    const { hotels, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {hotels.map((hotel, key) => (
          <HotelCard key={key} {...hotel} />
        ))}
      </Wrapper>
    );
  }
}

export default styled(FavoriteHotels)``;
