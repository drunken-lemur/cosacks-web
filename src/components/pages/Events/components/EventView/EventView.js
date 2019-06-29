import React from 'react';
import {Button} from 'forms';
import {Loader} from 'molecules';
import {EventsStore} from 'stores';
import styled from 'styled-components';
import {getParams, history} from 'utils';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {EventCard} from '..';

const Wrapper = styled.div``;

@withRouter
@observer
class EventView extends React.Component {
  onClose = () => {
    history.push('/events');
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    this.eventsStore.get(getParams(this).id);
  }

  render() {
    const {...rest} = this.props;
    const {eventsStore, onClose} = this;

    return (
      <Provider>
        <Wrapper {...rest}>
          <div>Event</div>

          <Button onClick={onClose}>Close</Button>

          <Loader store={eventsStore}>
            <EventCard {...eventsStore.data}/>
          </Loader>

          <Button onClick={onClose}>Close</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventView)``;
