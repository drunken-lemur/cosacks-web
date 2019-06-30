import React from 'react';
import {Input} from 'forms';
import PropTypes from 'prop-types';
import {Dropdown} from 'molecules';
import {Calendar} from 'organisms';
import styled from 'styled-components';
import {Calendar as CalendarIcon} from 'icons';
import {ClearIcon} from 'rambler-ui/icons/forms';

const formatter = new Intl.DateTimeFormat('ru-RU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const dateFormatter = date => {
  if (date instanceof Date) {
    return formatter.format(date);
  }

  if (Array.isArray(date)) {
    return date.map(dateFormatter).join(' - ');
  }

  return '';
};

const Wrapper = styled.div``;

class DatePicker extends React.Component {
  static propTypes = {
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
    showArrow: PropTypes.bool,
    visibleMonths: PropTypes.number,
    variation: PropTypes.oneOf(['service', 'media']),
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(Date),
      PropTypes.instanceOf(Date)
    ]),
    initDate: PropTypes.instanceOf(Date),
    today: PropTypes.instanceOf(Date),
    range: PropTypes.bool,
    minYear: PropTypes.number,
    maxYear: PropTypes.number,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    showYear: PropTypes.bool,
    showMonthSwitch: PropTypes.bool,
    highlightWeekend: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    dateFormatter: PropTypes.func,
    icon: PropTypes.node,
    clearIcon: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    closeOnClickOutside: true,
    contentPointX: 'left',
    anchorPointX: 'left',
    contentPointY: 'top',
    anchorPointY: 'bottom',
    autoPositionY: true,
    appendToBody: true,
    visibleMonths: 1,
    variation: 'service',
    range: false,
    minYear: 1900,
    maxYear: 2200,
    showYear: true,
    showMonthSwitch: true,
    highlightWeekend: false,
    onChange: () => null,
    dateFormatter,
    icon: <CalendarIcon/>,
    clearIcon: true
  };

  state = {
    value: null,
    isOpened: false
  };

  preventClose = false;
  open = () => this.setState({isOpened: true});
  close = () => this.setState({isOpened: false});
  onChange = (_, value) => {
    const {range, onChange} = this.props;

    this.setState({value});

    if (!range || (value[0] && value[1])) {
      this.close();
    }

    onChange(value);
  };
  clear = e => {
    const {range} = this.props;

    this.onChange(e, range ? [] : null);
  };
  onMouseDown = () => {
    this.preventClose = true;

    this.open();
  };
  onRequestClose = () => {
    if (!this.preventClose) {
      this.close();
    }

    this.preventClose = false;
  };
  getProps = () => {
    const {isOpened, value} = this.state;
    const {onRequestClose, onChange, onMouseDown, clear} = this;

    const {
      // Calendar props
      visibleMonths,
      variation,
      initDate,
      today,
      range,
      minYear,
      maxYear,
      minDate,
      maxDate,
      showYear,
      showMonthSwitch,
      highlightWeekend,

      // Dropdown props
      overlayClassName,
      overlayStyle,
      onOpen,
      onClose,
      closeOnClickOutside,
      contentPointX,
      anchorPointX,
      contentPointY,
      anchorPointY,
      autoPositionY,
      anchorFullWidth,
      appendToBody,
      padding,
      tabIndex,
      showArrow,

      // anchor
      placeholder,
      icon,

      // rest
      dateFormatter,
      clearIcon,
      ...rest
    } = this.props;

    const isEmpty = !value || (Array.isArray(value) && !value.length);

    const iconRight = clearIcon && !isEmpty && (
      <ClearIcon
        onClick={clear}
        style={{cursor: 'pointer', pointerEvents: 'all'}}
      />
    );

    return {
      dropdown: {
        overlayClassName,
        overlayStyle,
        onOpen,
        onClose,
        closeOnClickOutside,
        contentPointX,
        anchorPointX,
        contentPointY,
        anchorPointY,
        autoPositionY,
        anchorFullWidth,
        appendToBody,
        padding,
        tabIndex,
        showArrow,
        onRequestClose,
        isOpened
      },
      calendar: {
        visibleMonths,
        variation,
        value,
        initDate,
        today,
        range,
        minYear,
        maxYear,
        minDate,
        maxDate,
        showYear,
        showMonthSwitch,
        highlightWeekend,
        onChange
      },
      anchor: {
        value: dateFormatter(value),
        onMouseDown,
        placeholder,
        iconLeft: icon,
        iconRight
      },
      rest
    };
  };

  constructor(props) {
    super(props);

    this.state.value = props.value;
  }

  render() {
    const {dropdown, calendar, anchor, rest} = this.getProps();

    return (
      <Wrapper {...rest}>
        <Dropdown {...dropdown} anchor={<Input {...anchor} />}>
          <Calendar {...calendar} />
        </Dropdown>
      </Wrapper>
    );
  }
}

export default styled(DatePicker)``;
