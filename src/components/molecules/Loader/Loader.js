import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import styled from 'styled-components';
import RamblerLoader from 'rambler-ui/Loader';

const Wrapper = styled(RamblerLoader)``;

@observer
class Loader extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const {store, children, ...rest} = this.props;

    if (store.isError) {
      const {message} = store.error.toJSON();

      return <div>Error: {message}. Something went wrong.....</div>;
    }

    return (
      <Wrapper {...rest} loading={store.isPending}>
        <>{children}</>
      </Wrapper>
    );
  }
}

export default styled(Loader)``;
