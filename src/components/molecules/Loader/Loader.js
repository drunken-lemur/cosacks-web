import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RamblerLoader from 'rambler-ui/Loader';

const Wrapper = styled(RamblerLoader)``;

class Loader extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { ...rest } = this.props;

    return <Wrapper {...rest}/>;
  }
}

export default styled(Loader)``;
