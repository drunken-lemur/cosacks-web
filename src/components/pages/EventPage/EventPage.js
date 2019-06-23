import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Event} from './components';

export const Wrapper = styled.div``;

class EventPage extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {...rest} = this.props;

    return (
      <Wrapper {...rest}>
        <Event/>
      </Wrapper>
    );
  }
}

export default styled(EventPage)``;
