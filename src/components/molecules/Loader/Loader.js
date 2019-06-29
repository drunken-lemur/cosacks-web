import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RamblerLoader from 'rambler-ui/Loader';

const Wrapper = styled(RamblerLoader)``;

class Loader extends React.PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const {store, children, ...rest} = this.props;

    if (store.isError) {
      const {message} = store.error.toJSON();

      return `Error: ${message}. Something went wrong.....`;
    }

    return (
      <Wrapper {...rest} loading={store.isPending}>
        <>{children}</>
      </Wrapper>
    );
  }
}

export default styled(Loader)``;
