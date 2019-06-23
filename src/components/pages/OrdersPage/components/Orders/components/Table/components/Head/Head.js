import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, typography } from 'theme/mixins';

const Wrapper = styled.div`
  padding-bottom: 11px;
  border-bottom: 1px solid #d1d5db;
  ${display('flex', 'center', 'space-between')};
`;

const Cell = styled.div`
  color: #6b707b;
  text-transform: uppercase;
  ${typography(12, 15, 700)};
`;

class Head extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Cell>ID заказа</Cell>
        <Cell>Заезд</Cell>
        <Cell>Выезд</Cell>
        <Cell>Гости</Cell>
        <Cell>Санаторий</Cell>
        <Cell>Менеджер</Cell>
        <Cell>Изменен</Cell>
        <Cell>Статус</Cell>
        <Cell />
      </Wrapper>
    );
  }
}

export default styled(Head)``;
