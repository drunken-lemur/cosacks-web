import React from 'react';
import { Dots } from 'icons';
import { Caption } from 'atoms';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { display, typography } from 'theme/mixins';
import MessageSvgPath from 'assets/icons/message.svg';

export const statuses = {
  reserved: 'Забронирован',
  accepted: 'Подтвержден',
  canceled: 'Отменен',
  accepted1c: 'Подтвержден',
  error: 'Ошибка'
};

const Wrapper = styled.div`
  min-height: 93px;
  border-radius: 5px;
  ${display('flex', 'flex-start', 'space-between')};

  &:nth-child(even) {
    background: #f5f6f8;
  }
  &:nth-child(odd) {
  }
  &:hover,
  &:active {
    background: #e8ecf1;

    svg > path {
      fill: #3aa6d2;
    }
  }

  ${Dots} {
    cursor: pointer;
    padding: 7px;
    margin-left: 23px;
  }
`;

const Cell = styled.div`
  color: #4a515c;
  padding: 16px 19px;
  ${typography(14, 22)};

  & + & {
    padding-left: 0;
  }
`;

const MessageIcon = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: url(${MessageSvgPath}) center center no-repeat;

  ${p =>
    p.active &&
    css`
      &::after {
        top: -4px;
        width: 8px;
        height: 8px;
        right: -3px;
        content: '';
        border-radius: 50%;
        position: absolute;
        background: #e26161;
        border: 2px solid #fff;
      }
    `};
`;

class Row extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
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
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {
      id,
      checkin,
      checkout,
      guests = {},
      sanatory,
      manager,
      changed,
      status,
      messages,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <Cell>{id}</Cell>
        <Cell>{checkin}</Cell>
        <Cell>{checkout}</Cell>
        <Cell>
          {guests.people} человек {guests.rooms} номеров
        </Cell>
        <Cell>{sanatory}</Cell>
        <Cell>{manager}</Cell>
        <Cell>{changed}</Cell>
        <Cell>
          <Caption variant={status}>{statuses[status]}</Caption>
          <div>Подтвердите заказ</div>
        </Cell>
        <Cell>
          <MessageIcon active={!!messages} />
          <Dots />
        </Cell>
      </Wrapper>
    );
  }
}

export default styled(Row)``;
