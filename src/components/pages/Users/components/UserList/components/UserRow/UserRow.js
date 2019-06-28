import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div``;

@observer
class UserRow extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {...rest} = this.props;

    return <Wrapper {...rest}>UserRow</Wrapper>;
  }
}

export default styled(UserRow)``;
