import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

class EventRow extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {...rest} = this.props;

    return <Wrapper {...rest}>EventRow</Wrapper>;
  }
}

export default styled(EventRow)``;
