import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from './assets/ArrowIcon.svg';

const NavBarS = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: -12px;
  z-index: 9999999;
`;

const ArrowLeft = styled(ArrowIcon)`
  cursor: pointer;
`;

const ArrowRight = styled(ArrowIcon)`
  cursor: pointer;
  transform: scale(-1);
`;

@inject('pricesStore')
@observer
class NavBar extends Component {
  prevHandler = e => {
    e.preventDefault();

    const { onPreviousClick, pricesStore } = this.props;
    pricesStore.prevMonth();
    onPreviousClick();
  };

  nextHandler = e => {
    e.preventDefault();

    const { onNextClick, pricesStore } = this.props;
    pricesStore.nextMonth();
    onNextClick();
  };

  render() {
    return (
      <NavBarS className={this.props.className} style={this.props.style}>
        <ArrowLeft onClick={this.prevHandler} />
        <ArrowRight onClick={this.nextHandler} />
      </NavBarS>
    );
  }
}

NavBar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  month: PropTypes.instanceOf(Date),
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  previousMonth: PropTypes.object.isRequired,
  nextMonth: PropTypes.object.isRequired
};

export default NavBar;
