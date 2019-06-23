import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Mock } from './mock.svg';

const Wrapper = styled.div``;

class OrderAndChat extends React.PureComponent {
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
        <Mock />
      </Wrapper>
    );
  }
}

export default styled(OrderAndChat)``;
