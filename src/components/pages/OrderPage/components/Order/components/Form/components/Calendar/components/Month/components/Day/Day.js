import React from 'react';
import { Badge } from 'atoms';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import { typography } from 'theme/mixins';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 57px;
  height: 54px;
  position: relative;
  vertical-align: top;
  display: inline-block;

  ${Badge} {
    top: 0;
    right: 0;
    position: absolute;

    ${p =>
      p.count < 10
        ? css`
            background: #9cb4ca;
          `
        : css`
            background: #5ab2d6;
          `};
  }
`;

const Cell = styled.div`
  width: 55px;
  height: 50px;
  border-radius: 2px;
  margin: 4px 2px 0 0;
  padding: 5px 0 0 7px;
  box-sizing: border-box;

  ${p =>
    !p.available
      ? css`
          background: #e9f0f5;
        `
      : !p.isSelected
      ? css`
          background: #ebf8fd;
        `
      : css`
          background: #5ab2d6;
        `};
`;

const Date = styled.div`
  padding-bottom: 7px;
  ${typography(13, 17, 500)};

  ${p =>
    !p.isSelected
      ? css`
          color: #4c4c4c;
        `
      : css`
          color: #fff;
        `};
`;

const Price = styled.div`
  ${typography(12, 14)};

  ${p =>
    p.price > 9999 &&
    css`
      margin-left: -3px;
    `};

  ${p =>
    p.isSelected
      ? css`
          color: rgba(255, 255, 255, 0.7);
        `
      : !p.available
      ? css`
          color: rgba(76, 76, 76, 0.5);
        `
      : p.price < 3000
      ? css`
          color: #4e9ebf;
        `
      : css`
          color: #4a515c;
        `};
`;

class Day extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isSelected: PropTypes.bool,
    day: PropTypes.number,
    price: PropTypes.number,
    available: PropTypes.number,
    onClick: PropTypes.func
  };

  static defaultProps = {
    day: 0,
    price: 0,
    available: 0,
    className: '',
    isSelected: false,
    onClick: () => null
  };

  render() {
    const { available, day, price, isSelected, ...rest } = this.props;

    return (
      <Wrapper {...rest} count={available}>
        {!!available && <Badge count={available} />}

        {!!day && (
          <Cell {...{ isSelected, available }}>
            <Date {...{ isSelected, available, price }}>{day}</Date>

            <Price {...{ isSelected, available, price }}>
              {!available || !price ? '-' : formatPrice(price)}
            </Price>
          </Cell>
        )}
      </Wrapper>
    );
  }
}

export default styled(Day)``;
