import React from 'react';
import {Button} from 'forms';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import {EventsStore} from 'stores';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {EventCard} from '..';

const Wrapper = styled.div``;

@withRouter
@observer
class EventView extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  onClose = () => {
    const {history} = this.props;

    history.replace('/events');
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    const {match} = this.props;

    this.eventsStore.get(match.params.id);
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
