import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import EventsStore from 'stores/EventsStore/One';
import CreateFormStore from 'stores/forms/Events/CreateForm';

import {CreateForm} from './components';

const Wrapper = styled.div``;

@withRouter
@observer
class EventCreate extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  navigateTo = store => {
    const {id} = store.data;
    const {history} = this.props;

    history.replace(`/events/${id}`);
  };

  onSuccess = form => {
    const values = form.values();
    const {eventsStore, navigateTo} = this;

    eventsStore.create(values).then(navigateTo);
  };

  onError = form => {
    console.log('onError', {form});
  };

  constructor(props) {
    super(props);

    const {onSuccess, onError} = this;
    this.createForm = new CreateFormStore({onSuccess, onError});

    this.eventsStore = EventsStore.create();
  }

  render() {
    const {createForm} = this;
    const {...rest} = this.props;

    return (
      <Provider {...{createForm}}>
        <Wrapper {...rest}>
          <CreateForm/>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventCreate)``;
