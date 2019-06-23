import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

const Wrapper = styled.div`
  color: #6b707b;
  ${typography(14, 16)};
`;

class Text extends React.PureComponent {
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

export default styled(Text)``;
