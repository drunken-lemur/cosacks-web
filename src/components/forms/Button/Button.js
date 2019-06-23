import React from 'react';
import PropTypes from 'prop-types';
import RamblerButton from 'rambler-ui/Button';
import styled, { css } from 'styled-components';
import { typography, transition } from 'theme/mixins';

export const variants = {
  primary: {
    default: {
      color: '#fff',
      borderColor: '#5ab2d6',
      backgroundColor: '#5ab2d6'
    },
    hover: {
      color: '#fff',
      borderColor: '#3aa6d2',
      backgroundColor: '#3aa6d2'
    },
    active: {
      color: '#fff',
      borderColor: '#2e96c1',
      backgroundColor: '#2e96c1'
    },
    disabled: {
      color: '#fff',
      borderColor: '#add9eb',
      backgroundColor: '#add9eb'
    }
  },
  outline: {
    default: {
      color: '#5ab2d6',
      borderColor: '#5ab2d6',
      backgroundColor: 'transparent'
    },
    hover: {
      color: '#3aa6d2',
      borderColor: '#3aa6d2',
      backgroundColor: 'transparent'
    },
    active: {
      color: '#2e96c1',
      borderColor: '#2e96c1',
      backgroundColor: 'transparent'
    },
    disabled: {
      color: '#5ab2d6',
      borderColor: '#5ab2d6',
      backgroundColor: 'transparent'
    }
  },
  flat: {
    default: {
      color: '#5ab2d6',
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    },
    hover: {
      color: '#3aa6d2',
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    },
    active: {
      color: '#2e96c1',
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    },
    disabled: {
      color: '#add9eb',
      borderColor: '#transparent',
      backgroundColor: 'transparent'
    }
  }
};

const variant = state => p => {
  const values =
    variants[p.type] && variants[p.type][state]
      ? variants[p.type][state]
      : null;

  return (
    values &&
    css`
      color: ${values.color};
      background: ${values.backgroundColor};

      span {
        color: ${values.color};
      }

      &:after,
      &&:before {
        border: 2px solid ${values.borderColor};
      }
    `
  );
};

const StyledButton = styled(RamblerButton)`
  &&& {
    border: none;
    outline: none;
    ${transition()};
    text-transform: none;
    box-sizing: border-box;
    ${typography(13, 16, 500)};

    & > span {
      height: 42px;
      line-height: 42px;
    }

    ${p => css`
      &,
      :after,
      :before {
        border-radius: ${p.rounded ? 9999 : 4}px;
      }
    `};

    ${p =>
      p.disabled
        ? variant('disabled')
        : css`
            ${variant('default')};

            &:hover {
              ${variant('hover')};
            }

            &:active {
              ${variant('active')};
            }
          `}
  }
`;

class Button extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(Object.keys(variants)),
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['small', 'medium']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    loading: PropTypes.bool,
    rounded: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    variant: 'primary',
    href: '',
    target: '',
    icon: null,
    iconPosition: 'left',
    size: 'medium',
    onClick: () => null,
    disabled: false,
    type: 'button',
    loading: false,
    rounded: false
  };

  render() {
    const { children, variant: type, type: buttonType, ...rest } = this.props;

    return (
      <StyledButton {...{ ...rest, type, buttonType }}>{children}</StyledButton>
    );
  }
}

export default styled(Button)``;
