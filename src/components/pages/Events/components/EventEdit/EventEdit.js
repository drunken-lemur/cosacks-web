import React from 'react';
import {reaction} from 'mobx';
import {Loader} from 'molecules';
import {Button, Input} from 'forms';
import styled from 'styled-components';
import {getParams, history} from 'utils'
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {EventsStore} from 'stores';
import EventFormState from 'stores/forms/events/EventForm';

import {EventForm} from '..';

const Wrapper = styled.div`
  ${Button},
  ${Input} {
    margin: 8px;
  }
`;

@withRouter
@observer
class EventEdit extends React.Component {
  onSuccess = form => {
    const {eventsStore} = this;
    const data = form.values();

    eventsStore.update(getParams(this).id, data)
      .then(() => history.push('/events'));
  };

  onClose = () => {
    history.push('/events');
  };

  onError = form => {
    console.log('onError', {form});
  };

  onSubmit = () => {
    this.eventsForm.submit();
  };

  constructor(props) {
    super(props);

    const {onSuccess, onError} = this;
    this.eventsForm = new EventFormState({onSuccess, onError});

    this.eventsStore = EventsStore.create();
  }

  componentDidMount() {
    const {eventsStore, eventsForm} = this;

    this.reactions = [
      reaction(
        () => eventsStore.data,
        () => {
          eventsForm.set('value', eventsStore.data.toJSON());
        }
      )
    ];

    eventsStore.get(getParams(this).id);
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const {...rest} = this.props;
    const {eventsForm, eventsStore, onSubmit, onClose} = this;

    return (
      <Provider {...{eventsForm}}>
        <Wrapper {...rest}>
          <div>EventEdit</div>

          <Loader store={eventsStore}>
            <EventForm/>

            <Button onClick={onSubmit}>Save</Button>

            <Button onClick={onClose}>Close</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventEdit)``;
