import React from 'react';
import {Button} from 'forms/index';
import PropTypes from 'prop-types';
import Loader from 'rambler-ui/Loader';
import styled from 'styled-components';
import {observer, Provider} from 'mobx-react';
import {NavLink, withRouter} from 'react-router-dom';

import {EventsStore} from 'stores/index';

const Wrapper = styled.div`
  color: #8B9898;
  
  article {
    padding: 16px;
    border: 1px dotted #4c4c4c;
  }
  
  strong {
    color: #000;
  }
  
  ${Button},
   article {
    margin: 8px;
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

  onView = id => () => {
    const {history} = this.props;

    history.replace(`/events/${id}`);
  };

  onEdit = id => () => {
    const {history} = this.props;

    history.replace(`/events/${id}/edit`);
  };

  onDelete = id => () => {
    const {eventsStore} = this;

    this.eventsStore
      .delete(id)
      .then(() => eventsStore.find());
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    this.eventsStore.find();
  }

  render() {
    const {...rest} = this.props;
    const {eventsStore, onCreate, onView, onEdit, onDelete} = this;

    const events = eventsStore.list.toJSON();

    return (
      <Provider>
        <Wrapper {...rest}>
          <div>EventsList</div>

          <Button onClick={onCreate}>Create</Button>

          <Loader loading={eventsStore.isPending}>
            {events.map(event => (
              <article key={event._id}>
                <div>
                  <NavLink to={`/events/${event._id}`}>
                    <strong>Name:</strong> {event.name}
                  </NavLink>
                </div>

                <div>
                  <strong>Description:</strong> {event.description}
                </div>

                <div>
                  <strong>Start:</strong> {event.start} - <strong>End:</strong> {event.end}
                </div>

                <Button onClick={onView(event._id)}>View</Button>

                <Button onClick={onEdit(event._id)}>Edit</Button>

                <Button onClick={onDelete(event._id)}>Delete</Button>
              </article>
            ))}
          </Loader>

          <Button onClick={onCreate}>Create</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventsList)``;
