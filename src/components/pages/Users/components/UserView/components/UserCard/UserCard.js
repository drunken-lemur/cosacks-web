import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

class UserCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {...rest} = this.props;

    return <Wrapper {...rest}>UserCard</Wrapper>;
  }
}

export default styled(UserCard)``;
