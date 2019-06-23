import React from 'react';
import { Avatar } from 'atoms';
import PropTypes from 'prop-types';
import { CornerDown } from 'icons';
import styled from 'styled-components';
import { typography, flexCenterBetween } from 'theme/mixins';

const Wrapper = styled.div`
  ${flexCenterBetween()};
  display: inline-flex;

  ${Avatar} {
    cursor: pointer !important;
    margin: 10px !important;
  }

  ${CornerDown} {
    margin: 3px 4px;
  }
`;

const UserName = styled.div`
  color: #fff;
  cursor: pointer;
  ${typography(14, 17, 500)};
`;

class UserBar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    className: '',
    avatar: '',
    name: ''
  };

  render() {
    const { avatar, name, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Avatar src={avatar} size={25} />

        <UserName>
          {name}
          <CornerDown />
        </UserName>
      </Wrapper>
    );
  }
}

export default styled(UserBar)``;
