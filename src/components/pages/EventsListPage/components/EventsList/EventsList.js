import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {observer, Provider} from 'mobx-react';

import EventsStore from 'stores/EventsStore/List';

const Wrapper = styled.div``;

@observer
class EventsList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    this.eventsStore.fetch();
  }

  render() {
    const {eventsStore} = this;
    const {...rest} = this.props;

    return (
      <Provider>
        <Wrapper {...rest}>EventsList
          <pre>
            {eventsStore.status}
            {JSON.stringify(eventsStore.data.toJSON())}
          </pre>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventsList)``;
