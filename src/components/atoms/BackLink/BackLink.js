import React from 'react';
import { ArrowLeft } from 'icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  color: #7892aa;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  ${typography(12, 14, 700)};

  ${ArrowLeft} {
    margin-right: 12px;
  }
`;

class BackLink extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string
  };

  static defaultProps = {
    className: '',
    children: 'Назад',
    to: ''
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Link {...rest}>
        <ArrowLeft />
        {children}
      </Link>
    );
  }
}

export default styled(BackLink)``;
