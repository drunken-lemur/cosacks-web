import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {observer, Provider} from 'mobx-react';

import {One as EventsStore} from 'stores/EventsStore';

const Wrapper = styled.div``;

@observer
class Event extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    this.eventsStore.fetch();
  }

  render() {
    const {...rest} = this.props;

    return (
      <Provider>
        <Wrapper {...rest}>Event</Wrapper>
      </Provider>
    );
  }
}

export default styled(Event)``;
