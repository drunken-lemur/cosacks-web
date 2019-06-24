import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {EventsStore} from 'stores';
import {Button} from '../../../../forms';

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

    const event = eventsStore.data || {};

    return (
      <Provider>
        <Wrapper {...rest}>
          <div>Event</div>

          <Button onClick={onClose}>Close</Button>

          <article key={event._id}>
            <div>
              <strong>Name:</strong> {event.name}
            </div>

            <div>
              <strong>Description:</strong> {event.description}
            </div>

            <div>
              <strong>Start:</strong> {event.start} - <strong>End:</strong> {event.end}
            </div>
          </article>

          <Button onClick={onClose}>Close</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(Event)``;
