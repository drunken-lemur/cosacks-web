import React from 'react';
import { Star } from 'icons';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import styled, { css } from 'styled-components';
import { typography, display, transition } from 'theme/mixins';

import noPhotoSvgPath from 'assets/icons/no-photo.svg';

const activeStyle = css`
  border: 3px solid #5ab2d6;
  box-shadow: 0px 9px 15px rgba(19, 136, 184, 0.4);
`;

const Wrapper = styled.div`
  width: 472px;
  height: 144px;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  border: 3px solid #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 12px 16px 16px;
  box-shadow: 0px 2px 6px rgba(36, 95, 119, 0.2);

  ${transition()};

  &:hover {
    ${activeStyle}
  }

  ${p => p.active && activeStyle};
`;

const TitleWrapper = styled.div`
  color: #4a515c;
  ${display('flex', 'flex-start', 'space-between')};
`;

const Title = styled.div`
  padding-right: 16px;
  ${typography(16, 18, 500)};
`;

const Rating = styled.div`
  padding-top: 3px;
  white-space: nowrap;
  ${typography(14, 16, 700)};
`;

const InnerWrapper = styled.div`
  height: 100%;
  margin-top: 8px;
  box-sizing: border-box;
  ${display('flex', 'flex-end', 'space-between')};
`;

const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Address = styled.div`
  color: #6b707b;
  padding-right: 8px;
  ${typography(14, 16)};
`;

const Price = styled.div`
  height: 100%;
  display: flex;
  color: #3aa6d2;
  align-items: flex-end;
  ${typography(20, 24, 700)};
`;

const ImageWrapper = styled.div`
  width: 108px;
  height: 72px;
  position: relative;
`;

const Image = styled.img`
  width: 108px;
  height: 72px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #f2f4f6 url(${noPhotoSvgPath}) no-repeat center center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  color: #fff;
  ${display('flex', 'center', 'center')};
  cursor: pointer;
  transition: 0.2s;
  background: #0006;
  border-radius: 4px;
  ${typography(12, 14, 500)};

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

class HotelCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    address: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
  };

  static defaultProps = {
    className: '',
    name: '',
    rating: 0,
    address: '',
    price: 0,
    image: ''
  };

  render() {
    const { name, rating, address, price, image, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <TitleWrapper>
          <Title>{name}</Title>

          <Rating>
            <Star /> {rating}
          </Rating>
        </TitleWrapper>

        <InnerWrapper>
          <Center>
            <Address>{address}</Address>

            <Price>от {formatPrice(price)}</Price>
          </Center>

          <ImageWrapper>
            <Image src={image} />
            <ImageOverlay>Подробнее</ImageOverlay>
          </ImageWrapper>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default styled(HotelCard)``;
