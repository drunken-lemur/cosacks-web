import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {EventCreate} from './components';

export const Wrapper = styled.div``;

class EventCreatePage extends React.PureComponent {
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
        <EventCreate/>
      </Wrapper>
    );
  }
}

export default styled(EventCreatePage)``;
