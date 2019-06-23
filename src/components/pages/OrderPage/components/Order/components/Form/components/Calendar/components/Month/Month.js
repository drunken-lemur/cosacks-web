import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'theme/mixins';
import styled, { css } from 'styled-components';

import { Day } from './components';

const Wrapper = styled.div`
  width: 427px;

  ${Day} {
    margin: 2px 2px;

    ${p =>
      p.day &&
      p.available &&
      css`
        cursor: pointer;
      `};
  }
`;

const Title = styled.div`
  display: flex;
  color: #979ba0;
  padding-bottom: 18px;
  justify-content: center;
  text-transform: uppercase;
  ${typography(12, 15, 700)};
`;

const DayName = styled.div`
  width: 61px;
  color: #4c4c4c;
  display: inline-flex;
  justify-content: center;
  text-transform: uppercase;
  ${typography(10, 12, 500)};
`;

const HollyDayName = styled(DayName)`
  color: #3aa6d2;
`;

class Mount extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func,
    title: PropTypes.string,
    days: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number
      })
    )
  };

  static defaultProps = {
    days: [],
    title: '',
    className: '',
    onSelect: () => null
  };

  render() {
    const { days, title, onSelect, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Title>{title}</Title>

        <DayName>Пн</DayName>
        <DayName>Вт</DayName>
        <DayName>Ср</DayName>
        <DayName>Чт</DayName>
        <DayName>Пт</DayName>
        <HollyDayName>Сб</HollyDayName>
        <HollyDayName>Вс</HollyDayName>

        {days.map((day, key) => (
          <Day key={key} {...day} onClick={e => onSelect(e, key, day)} />
        ))}
      </Wrapper>
    );
  }
}

export default styled(Mount)``;
