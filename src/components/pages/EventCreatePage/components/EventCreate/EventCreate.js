import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import {EventsStore} from 'stores';
import CreateFormStore from 'stores/forms/Events/CreateForm';

import {CreateForm} from './components';

const Wrapper = styled.div``;

@withRouter
@observer
class EventCreate extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: ''
  };

  navigateTo = ({data}) => {
    const url = `/events/${data._id}/edit`;
    const {history} = this.props;

    console.log('navigateTo:', url);

    history.replace(url);
  };

  onSuccess = form => {
    const values = form.values();
    const {eventsStore, navigateTo} = this;

    eventsStore.create(values)
      .then(navigateTo)
      .finally(form.reset.bind(form));
  };

  onError = form => {
    console.log('onError', {form});
  };

  onClose = () => {
    const {history} = this.props;

    history.replace('/events');
  };

  constructor(props) {
    super(props);

    const {onSuccess, onError} = this;
    this.createForm = new CreateFormStore({onSuccess, onError});

    this.eventsStore = EventsStore.create();
  }

  render() {
    const {...rest} = this.props;
    const {createForm, eventsStore, onClose} = this;

    if (eventsStore.isPending) {
      return 'Loading...';
    }

    return (
      <Provider {...{createForm}}>
        <Wrapper {...rest}>
          <CreateForm {...{onClose}}/>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventCreate)``;
