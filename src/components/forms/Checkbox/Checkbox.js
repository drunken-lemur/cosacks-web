import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {observer} from 'mobx-react';
import {ruiClass} from 'theme/mixins';
import Checkbox_ from 'rambler-ui/Checkbox';

const StyledCheckbox = styled(Checkbox_)`
  ${ruiClass('rui-Checkbox-fake', 'span')} {
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 2px;
  }

  ${ruiClass('rui-Checkbox-isChecked', '&')} {
    ${ruiClass('rui-Checkbox-fake', 'span')} {
      background: #5ab2d6 !important;
    }
  }

  ${ruiClass('rui-Checkbox-tick', 'svg')} {
    width: 9.5px;
  }
`;

@observer
class Checkbox extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    indeterminate: PropTypes.bool,
    checkboxClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    variation: PropTypes.oneOf(['regular', 'awesome']),
    size: PropTypes.oneOf(['small', 'medium'])
  };

  static defaultProps = {
    className: '',
    iconPosition: 'left',
    checkboxClassName: '',
    labelClassName: '',
    variation: 'awesome',
    size: 'medium'
  };

  render() {
    const {field, ...rest} = this.props;

    return (
      <StyledCheckbox
        {...rest}
        {...field.bind()}
        onCheck={field.onChange}
      />
    );
  }
}

export default styled(Checkbox)``;
