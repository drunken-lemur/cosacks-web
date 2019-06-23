import React from 'react';
import { Badge } from 'atoms';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import { typography } from 'theme/mixins';
import { observer } from "mobx-react";
import styled, { css } from 'styled-components';
import moment from "Utils/moment";

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
    background-color: #5AB2D6;

    ${props => props.count < 2
      ? css`
          background: #9cb4ca;
        `
      : css`
          background: #5ab2d6;
      `};
  }
`;

const Date = styled.div`
  padding-bottom: 7px;
  ${typography(13, 17, 500)};

  .DayPicker-Day--selected & {
    color: #fff;
  }

  .DayPicker-Day--disabled & {
    color: #a6a6a6;
  }
`;

const Price = styled.div`
  ${typography(12, 14)};
  color: #4C4C4C;

  .DayPicker-Day--selected & {
    color: rgba(255, 255, 255, 0.7);
  }

  .DayPicker-Day--disabled & {
    color: rgba(76, 76, 76, 0.5);
  }

  ${props => props.price > 9999 && css`
    margin-left: -3px;
  `};
`;

const Cell = styled.div`
  width: 55px;
  height: 50px;
  border-radius: 2px;
  margin: 4px 2px 0 0;
  padding: 5px 0 0 7px;
  box-sizing: border-box;
  background: #ebf8fd;

  &:hover {
    background: #e4f1f6;
  }

  .DayPicker-Day--selected & {
    background: #5ab2d6;
  }

  .DayPicker-Day--disabled & {
    background: #e9f0f5;
  }

  .DayPicker-Day--selected.DayPicker-Day--disabled & {
    background-color: #FDF1F1;
  }
`;

@observer
class Day extends React.Component {
  render() {
    const { available, day, price, ...rest } = this.props;
    const dayNumber = moment(day).format('D');

    return (
      <Wrapper {...rest} count={available}>
        {available > 0 && <Badge count={available} />}

        <Cell {...{ available }}>
          <Date {...{ available, price }}>{dayNumber}</Date>

          <Price {...{ available, price }}>
            {available > 0 && price > 0
              ? formatPrice(price)
              : '-'
            }
          </Price>
        </Cell>
      </Wrapper>
    );
  }
}

Day.propTypes = {
  className: PropTypes.string,
  day: PropTypes.instanceOf(Date).isRequired,
  price: PropTypes.number,
  available: PropTypes.number
};

Day.defaultProps = {
  price: -1,
  available: -1,
  className: ''
};

export default styled(Day)``;
