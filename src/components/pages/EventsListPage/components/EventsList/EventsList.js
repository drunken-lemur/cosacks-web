import React from 'react';
import {Button} from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {observer, Provider} from 'mobx-react';
import {NavLink, withRouter} from 'react-router-dom';

import EventsStore from 'stores/EventsStore/List';

const Wrapper = styled.div`
  color: #8B9898;
  
  article {
    padding: 16px;
    border: 1px dotted #4c4c4c;
  }
  
  strong {
    color: #000;
  }
`;

@withRouter
@observer
class EventsList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  onCreate = () => {
    const {history} = this.props;

    history.replace('/events/create');
  };

  onEdit = id => () => {
    const {history} = this.props;

    history.replace(`/events/${id}/edit`);
  };

  onDelete = id => () => {
    this.eventsStore.delete(id);
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
    const {eventsStore, onCreate, onEdit, onDelete} = this;

    const events = eventsStore.data.toJSON();

    if (eventsStore.isPending) {
      return 'Loading...';
    }

    return (
      <Provider>
        <Wrapper {...rest}>
          <div>EventsList</div>

          <Button onClick={onCreate}>Create</Button>

          {events.map(event => (
            <article key={event._id}>
              <div>
                <NavLink to={`/events/${event._id}/edit`}>
                  <strong>Name:</strong> {event.name}
                </NavLink>
              </div>

              <div>
                <strong>Description:</strong> {event.description}
              </div>

              <div>
                <strong>Start:</strong> {event.start} - <strong>End:</strong> {event.end}
              </div>

              <Button onClick={onEdit(event._id)}>Edit</Button>

              <Button onClick={onDelete(event._id)}>Delete</Button>
            </article>
          ))}

          <Button onClick={onCreate}>Create</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventsList)``;
