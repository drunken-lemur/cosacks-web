import React from 'react';
import PropTypes from 'prop-types';
import { SuccessSmall } from 'icons';
import styled, { css } from 'styled-components';
import { typography, flexCenter } from 'theme/mixins';

const Wrapper = styled.div`
  width: 44px;
  height: 30px;
  color: #6b707b;
  ${flexCenter()};
  cursor: pointer;
  user-select: none;
  position: relative;
  border-radius: 11px;
  display: inline-flex;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d1d5db;
  ${typography(12, 15, 700)};

  ${SuccessSmall} {
    right: -3px;
    bottom: -6px;
    display: none;
    position: absolute;
  }

  ${p =>
    p.isSelected &&
    css`
      border: 2px solid #5ab2d6;

      ${SuccessSmall} {
        display: block;
      }
    `};
`;

class Chip extends React.PureComponent {
  static propTypes = {
    label: PropTypes.node,
    isSelected: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    label: '',
    className: '',
    isSelected: false,
    onClick: () => null
  };

  render() {
    const { className, onClick, isSelected, label } = this.props;

    return (
      <Wrapper {...{ className, onClick, isSelected }}>
        {label}
        <SuccessSmall />
      </Wrapper>
    );
  }
}

export default styled(Chip)``;
