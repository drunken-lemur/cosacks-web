import React from 'react';
import {Block} from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled(Block)`
  --padding: 16px;
  --background: #fff;
  --border-radius: 4px;
  --box-shadow: 0px 2px 6px rgba(36, 95, 119, 0.2);

  padding: var(--padding);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

class BlockShadow extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {children, ...rest} = this.props;

    return <Wrapper {...rest}>{children}</Wrapper>;
  }
}

export default styled(BlockShadow)``;
