import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'theme/mixins';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid #d1d5db;
`;

const Tab = styled(NavLink)`
  color: #6b707b;
  cursor: pointer;
  position: relative;
  padding-bottom: 14px;
  display: inline-block;
  text-decoration: none;
  ${typography(14, 17, 700)};

  & + & {
    margin-left: 40px;
  }

  ${p =>
    p.active &&
    css`
      color: #3aa6d2;
      &::after {
        width: 100%;
        height: 3px;
        content: '';
        left: 0;
        bottom: -2px;
        position: absolute;
        background: #5ab2d6;
        border-radius: 1.5px;
      }
    `};
`;

class Tabs extends React.PureComponent {
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
        <Tab to="#" active={`${true}`}>
          Все
        </Tab>
        <Tab to="#">Будущие</Tab>
        <Tab to="#">Завершенные</Tab>
        <Tab to="#">Отмененные</Tab>
        <Tab to="#">Скоро отмена</Tab>
        <Tab to="#">Архив</Tab>
      </Wrapper>
    );
  }
}

export default styled(Tabs)``;
