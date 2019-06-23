// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {EventsList} from './components';

export const Wrapper = styled.div``;

class EventsListPage extends React.Component {
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
        <EventsList/>
      </Wrapper>
    ); 
  }
}
 
export default styled(EventsListPage)``;
