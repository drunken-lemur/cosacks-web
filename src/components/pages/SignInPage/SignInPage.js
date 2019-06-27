import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {SignIn} from './components';

const Wrapper = styled.div``;

class SignInPage extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {...rest} = this.props;

    return (
      <Wrapper {...rest}>
        <SignIn/>
      </Wrapper>
    );
  }
}

export default styled(SignInPage)``;
