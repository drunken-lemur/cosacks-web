import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

import EventsStore from 'stores/EventsStore/One';
import EditFormStore from 'stores/forms/Events/EditForm';

import {EditForm} from './components';

const Wrapper = styled.div``;

@withRouter
@observer
class EventEdit extends React.Component {
  static propTypes = {
    className: PropTypes.string
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
    const {match} = this.props;
    const data = form.values();
    const {eventsStore, navigateTo} = this;

    eventsStore.update(match.params.id, data)
      .then(navigateTo);
  };

  onClose = () => {
    const {history} = this.props;

    history.replace('/events');
  };

  constructor(props) {
    super(props);

    const {onSuccess, onError} = this;
    this.editForm = new EditFormStore({onSuccess, onError});

    this.eventsStore = EventsStore.create();
  }

  componentDidMount() {
    const {match} = this.props;
    const {eventsStore, editForm} = this;

    eventsStore.fetch(match.params.id)
      .then(({data}) => {
        editForm.set('value', data.toJSON());
      });
  }

  render() {
    const {...rest} = this.props;
    const {editForm, eventsStore, onClose} = this;

    if (eventsStore.isPending) {
      return 'Loading...';
    }

    return (
      <Provider {...{editForm}}>
        <Wrapper {...rest}>
          <EditForm {...{onClose}}/>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventEdit)``;
