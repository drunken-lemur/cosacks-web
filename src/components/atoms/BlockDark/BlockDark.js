import React from 'react';
import { Block } from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled(Block)`
  --padding: 16px;
  --border-width: 1px;
  --border-radius: 4px;

  --text-color: #6b707b;
  --value-color: #4c4c4c;
  --title-color: #3aa6d2;
  --border-color: #bfc6d3;
  --background-color: #e5e8ed;

  border: var(--border-width) solid var(--border-color);
  padding: var(--padding);
  background: var(--background-color);
  border-radius: var(--border-radius);
`;

class BlockDark extends React.PureComponent {
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

export default styled(BlockDark)``;
