import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RamblerDropdown from 'rambler-ui/Dropdown';

const StyledDropdown = styled(RamblerDropdown)``;

class Dropdown extends React.PureComponent {
  static propTypes = {
    anchor: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    isOpened: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeOnClickOutside: PropTypes.bool,
    contentPointX: PropTypes.oneOf(['left', 'right', 'center']),
    anchorPointX: PropTypes.oneOf(['left', 'right', 'center']),
    contentPointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    anchorPointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    autoPositionY: PropTypes.bool,
    anchorFullWidth: PropTypes.bool,
    appendToBody: PropTypes.bool,
    padding: PropTypes.any,
    tabIndex: PropTypes.number,
    showArrow: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    style: { padding: '10px 0' },
    closeOnClickOutside: true,
    contentPointX: 'left',
    anchorPointX: 'left',
    contentPointY: 'top',
    anchorPointY: 'bottom',
    autoPositionY: true,
    appendToBody: true
  };

  render() {
    const { children, ...rest } = this.props;

    return <StyledDropdown {...rest}>{children}</StyledDropdown>;
  }
}

export default styled(Dropdown)``;
