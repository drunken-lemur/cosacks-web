import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ruiClass} from 'theme/mixins';
import {MenuItem} from 'rambler-ui/Menu';
import RamblerSelect from 'rambler-ui/Select';

import {CornerDown} from 'icons';

const Wrapper = styled.div`
  &&& {
    ${ruiClass('rui-Input-icon')} {
      width: 21px;
      height: 21px;
    }

    input {
      height: 42px;
      border-radius: 3px;
    }
    input + div {
      border-color: transparent;
    }
    div[role='button'] {
      svg,
      path {
        fill: #4a515c;
        transition-duration: 0.2s;
      }
    }

    ${ruiClass('rui-Select-isOpened')} {
      div[role='button'] svg {
        transform: rotate(180deg);
      }
    }

    ${ruiClass('rui-MenuItem')} {
      :hover {
        color: #3aa6d2;
      }
    }
  }
`;

class Select extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    ),
    style: PropTypes.object,
    dropdownClassName: PropTypes.string,
    dropdownStyle: PropTypes.string,
    menuClassName: PropTypes.string,
    menuStyle: PropTypes.object,
    multiple: PropTypes.bool,
    multipleType: PropTypes.oneOf(['regular', 'background']),
    clearIcon: PropTypes.bool,
    valuesEquality: PropTypes.func,
    iconElementRenderer: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    icon: PropTypes.node,
    arrowIcon: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium']),
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
    status: PropTypes.oneOf(['error', 'warning', 'success', 'filled', null]),
    appendToBody: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    customElementRenderer: PropTypes.func,
    rootClassName: PropTypes.string,
    rootStyle: PropTypes.object,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    inputMode: PropTypes.bool,
    native: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    className: '',
    selected: null,
    onChange: () => null,
    multiple: false,
    multipleType: 'regular',
    clearIcon: false,
    valuesEquality: (a, b) => a === b,
    inputValueRenderer: value => value && value.label,
    disabled: false,
    readOnly: false,
    arrowIcon: <CornerDown/>,
    size: 'medium',
    variation: 'regular',
    status: null,
    appendToBody: false,
    inputMode: false,
    native: false
  };

  state = {
    value: null
  };

  onChange = value => {
    const {onChange} = this.props;

    this.setState({value});

    onChange(value);
  };

  render() {
    const {state, onChange} = this;
    const {items, value, icon, ...rest} = this.props;

    return (
      <Wrapper>
        <RamblerSelect
          {...rest}
          icon={icon || (!!value && value.icon)}
          onChange={onChange}
          value={state.value || value}
        >
          {items.map((item, key) => (
            <MenuItem value={item} key={key}>
              {item.icon} {item.label || item.value}
            </MenuItem>
          ))}
        </RamblerSelect>
      </Wrapper>
    );
  }
}

export default styled(Select)``;
