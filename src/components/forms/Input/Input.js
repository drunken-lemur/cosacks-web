import React from 'react';
import PropTypes from 'prop-types';
import {typography} from 'theme/mixins';
import {setDisplayName} from 'recompose';
import {observer} from 'mobx-react';
import RamblerInput from 'rambler-ui/Input';
import styled, {css} from 'styled-components';

export const variations = {
  regular: {
    default: {
      color: '#4A515C',
      background: 'transparent',
      borderColor: '#D1D5DB',
      placeholderColor: '#979BA0'
    },
    focused: {
      color: '#4A515C',
      background: 'transparent',
      borderColor: '#ABB3BF',
      placeholderColor: '#979BA0'
    },
    disabled: {
      color: '#4A515C',
      background: 'transparent',
      borderColor: '#ABB3BF',
      placeholderColor: '#979BA0'
    },
    success: {
      color: '#4A515C',
      background: 'transparent',
      borderColor: '#62CB94',
      placeholderColor: '#979BA0'
    },
    warning: {
      color: '#4A515C',
      background: 'transparent',
      borderColor: '#F8E2AE',
      placeholderColor: '#979BA0'
    },
    error: {
      color: '#4A515C',
      background: 'transparent',
      borderColor: '#E26161',
      placeholderColor: '#979BA0'
    }
  }
};

const variation = state => p => {
  const values =
    variations[p.variation] && variations[p.variation][state]
      ? variations[p.variation][state]
      : null;

  return (
    values &&
    css`
      color: ${values.color};
      background: ${values.background};
      border: 1px solid ${values.borderColor};

      ::placeholder {
        color: ${values.placeholderColor};
      }
    `
  );
};

const StyledInput = styled(RamblerInput)`
  &&& {
    &,
    div,
    input {
      border: none;
      border-radius: 4px;
    }

    input {
      height: 42px;

      ${typography(13, 15, 400)};

      ${p =>
  p.disabled
    ? variation('disabled')
    : p.status
    ? variation(p.status)
    : variation('default')};

      :focus {
        ${variation('focused')};
      }
    }
  }
`;

@setDisplayName('Input')
@observer
class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([
      'email',
      'number',
      'password',
      'tel',
      'text',
      'url',
      'time',
      'date'
    ]),
    size: PropTypes.oneOf(['small', 'medium']),
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
    name: PropTypes.string,
    status: PropTypes.oneOf(['error', 'warning', 'success', null]),
    isFocused: PropTypes.bool,
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node
  };

  static defaultProps = {
    className: '',
    size: 'medium',
    variation: 'regular',
    inputClassName: '',
    iconLeft: null,
    iconRight: null
  };

  render() {
    const {field, ...rest} = this.props;

    return <StyledInput {...field && field.bind()} {...rest} />;
  }
}

export default styled(Input)``;
