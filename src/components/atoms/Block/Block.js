import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
`;

class Block extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { children, ...rest } = this.props;

    return <Wrapper {...rest}>{children}</Wrapper>;
  }
}

export default styled(Block)``;
