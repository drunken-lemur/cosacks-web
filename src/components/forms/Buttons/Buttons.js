import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

class Buttons extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({

      })
    ),
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    onReset: PropTypes.func,
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {...rest} = this.props;

    return <Wrapper {...rest}>Buttons</Wrapper>;
  }
}

export default styled(Buttons)``;
