import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Event} from './components';

export const Wrapper = styled.div``;

class EventPage extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    subComponent: PropTypes.object
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className, ...rest} = this.props;

    return (
      <Wrapper className={className} {...rest}>
        <Event/>
      </Wrapper>
    );
  }
}

export default EventPage;
