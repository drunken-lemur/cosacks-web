import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {EventEdit} from './components/index';

const Wrapper = styled.div``;

class EventEditPage extends React.PureComponent {
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
        <EventEdit/>
      </Wrapper>
    );
  }
}

export default styled(EventEditPage)``;
