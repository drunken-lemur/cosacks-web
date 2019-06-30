import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RamblerAvatar from 'rambler-ui/Avatar';

const StyledAvatar = styled(RamblerAvatar)``;

class Avatar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    backgroundColor: PropTypes.string,
    iconBackgroundColor: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.number,
    shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
    href: PropTypes.string,
    container: PropTypes.element
  };

  static defaultProps = {
    className: '',
    size: 45,
    shape: 'circle'
  };

  render() {
    const {...props} = this.props;

    return <StyledAvatar {...props} />;
  }
}

export default styled(Avatar)``;
