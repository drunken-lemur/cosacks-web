import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {One as EventsStore} from 'stores/EventsStore';

const Wrapper = styled.div``;

@withRouter
@observer
class Event extends React.Component {
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
    const {match} = this.props;

    this.eventsStore.fetch(match.params.id);
  }

  render() {
    const {eventsStore} = this;
    const {...rest} = this.props;

    return (
      <Provider>
        <Wrapper {...rest}>Event
          {JSON.stringify(eventsStore.data)}
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(Event)``;
