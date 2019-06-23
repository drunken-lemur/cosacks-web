import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { ruiClass } from 'theme/mixins';

import { MenuItem } from 'rambler-ui/Menu';
import RamblerSelect from 'rambler-ui/Select';
import Loader from 'rambler-ui/Loader';

const Wrapper = styled.div`
  &&& {
    ${ruiClass('rui-Input-icon')} {
      width: 21px;
      height: 21px;
    }

    input {
      height: 45px;
      border-radius: 3px;
    }

    input + div {
      border-color: transparent;
    }

    div[role='button'] {
      color: #3aa6d2;

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

@observer
class Select extends Component {
  inputValueRenderer = value => {
    const { labelKey } = this.props;
    return value && value[labelKey];
  };

  onChange = value => {
    const { field, onChange } = this.props;

    if (onChange) return onChange(value);

    value ? field.set(value) : field.clear();
  };

  onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const {
      items,
      field,
      labelKey,
      valueKey,
      icon,
      isLoading,
      ...rest
    } = this.props;

    const menuOptions = items.map(item => {
      const label = item[labelKey];
      const value = item[valueKey];

      return (
        <MenuItem key={value} value={item}>
          {label}
        </MenuItem>
      );
    });

    return (
      <Wrapper onKeyDown={this.onKeyDown}>
        <Loader loading={isLoading}>
          <RamblerSelect
            {...rest}
            icon={icon}
            inputValueRenderer={this.inputValueRenderer}
            {...field.bind({ onChange: this.onChange })}
          >
            {menuOptions}
          </RamblerSelect>
        </Loader>
      </Wrapper>
    );
  }
}

Select.defaultProps = {
  labelKey: 'label',
  valueKey: 'value',
  items: [],
  isLoading: false
};

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  field: PropTypes.object.isRequired,
  items: PropTypes.array,
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

export default styled(Select)``;
