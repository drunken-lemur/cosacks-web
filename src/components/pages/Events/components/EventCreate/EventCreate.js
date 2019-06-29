import React from 'react';
import {history} from 'utils';
import {Loader} from 'molecules';
import {Button, Input} from 'forms';
import styled from 'styled-components';
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
class EventCreate extends React.Component {
  onSuccess = form => {
    const {eventsStore} = this;
    const values = form.values();

    eventsStore.create(values)
      .then(() => history.push('/events'));
  };

  onClose = () => {
    const {history} = this.props;

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

  render() {
    const {...rest} = this.props;
    const {eventsForm, eventsStore, onSubmit, onClose} = this;

    return (
      <Provider {...{eventsForm}}>
        <Wrapper {...rest}>
          <div>EventCreate</div>

          <Loader store={eventsStore}>
            <EventForm/>

            <Button onClick={onSubmit}>Create</Button>

            <Button onClick={onClose}>Close</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventCreate)``;
