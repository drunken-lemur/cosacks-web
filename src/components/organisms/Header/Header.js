import React from 'react';
import {Logo} from 'icons';
import {Menu} from 'molecules';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {flexCenter, flexCenterBetween} from 'theme/mixins';

import {UserBar} from './components';

const items = [
  {
    to: '/users',
    title: 'Users',
  },
  {
    to: '/events',
    title: 'Events',
  }
];

const Wrapper = styled.div`
  height: 72px;
  background: #9cb4ca;
  ${flexCenterBetween()};

  ${UserBar} {
    margin-right: 20px;
  }
`;

const InnerWrapper = styled.div`
  ${flexCenterBetween()};
`;

const LogoWrapper = styled.div`
  ${flexCenter()};
  margin: 0 20px 0 15px;
`;

class Header extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    menuItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ),
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string
    })
  };

  static defaultProps = {
    className: '',
    menuItems: [],
    user: {
      avatar: '',
      name: ''
    }
  };

  render() {
    const {menuItems, user, ...rest} = this.props;

    return (
      <Wrapper {...rest}>
        <InnerWrapper>
          <LogoWrapper>
            <NavLink to="/">
              <Logo/>
            </NavLink>
          </LogoWrapper>

          <Menu items={[...menuItems, ...items]}/>
        </InnerWrapper>

        <UserBar {...user} />
      </Wrapper>
    );
  }
}

export default styled(Header)``;
