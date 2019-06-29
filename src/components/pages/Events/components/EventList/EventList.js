import React from 'react';
import {Button} from 'forms';
import PropTypes from 'prop-types';
import {List, Loader} from 'molecules';
import styled from 'styled-components';
import {observer, Provider} from 'mobx-react';
import {withRouter} from 'react-router-dom';

import {EventRow} from '..';

import {EventsStore} from 'stores';

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
class EventList extends React.Component {
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

          <Loader store={eventsStore}>
            <List
              list={events}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
              component={EventRow}
            />
          </Loader>

          <Button onClick={onCreate}>Create</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventList)``;
