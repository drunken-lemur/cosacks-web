import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Text } from 'atoms';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

const Wrapper = styled(Text)`
  color: #4a515c;
  ${typography(16, 20, 700)};

  ${Badge} {
    position: relative;
    top: -12px;
  }
`;

class Title extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { count, children, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {children} <Badge count={count} />
      </Wrapper>
    );
  }
}

export default styled(Title)``;
