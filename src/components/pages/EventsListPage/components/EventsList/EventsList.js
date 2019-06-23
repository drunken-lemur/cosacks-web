import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Provider } from "mobx-react";

import {One as EventsStore} from 'stores/EventsStore';

const Wrapper = styled.div``;

class EventsList extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();

  }

  componentWillMount() {
    this.eventsStore.fetch();
  }

  render() {
    const { ...rest } = this.props;

    return (
      <Provider>
        <Wrapper {...rest}>EventsList</Wrapper>
      </Provider>
    );
  }
}

export default styled(EventsList)``;
