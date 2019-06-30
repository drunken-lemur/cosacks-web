import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Wrapper = styled(NavLink)`
  color: #3c6f9d;
  text-decoration: none;
`;

class Link extends React.PureComponent {
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

export default styled(Link)``;
