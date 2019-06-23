import React, { Component } from 'react';
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from "Utils/moment";

import { Calendar as CalendarIcon } from 'icons';
import { Input } from 'forms';
import { Dropdown } from 'molecules';
import { Calendar } from 'organisms';

const Wrapper = styled.div``;

@observer
class DateRangePicker extends Component {
  @observable isOpened = false

  @observable today = moment().toDate()

  @computed get rangeValue() {
    const { checkIn, checkOut } = this.props;

    return [
      moment(checkIn.value).toDate(),
      moment(checkOut.value).toDate()
    ]
  }

  @computed get rangeString() {
    const { checkIn, checkOut, format } = this.props;

    return [checkIn, checkOut]
      .map(date => moment(date.value))
      .filter(date => date.isValid())
      .map(date => date.format(format))
      .join(' – ')
  }

  setCheckIn = (value) => {
    const { checkIn } = this.props;
    !!value ? checkIn.set(value) : checkIn.clear()
  }

  setCheckOut = (value) => {
    const { checkOut } = this.props;
    !!value ? checkOut.set(value) : checkOut.clear()
  }

  open = () => {
    this.isOpened = true
  };

  close = () => {
    this.isOpened = false
  };

  onChange = (_, value) => {
    const [from, to] = value;

    this.setCheckIn(from);
    this.setCheckOut(to);

    if (from && to) this.close();
  };

  onRequestClose = () => {
    if (!this.preventClose)
      this.close()

    this.preventClose = false
  };

  renderAnchor = () => {
    return <Input
      value={this.rangeString}
      onFocus={() => {
        if (!this.isOpened) this.open();
      }}
      onMouseDown={() => {
        if (!this.isOpened) {
          this.open();
          this.preventClose = true;
        }
      }}
      iconLeft={<CalendarIcon />}
    />;
  };

  render() {
    const { checkIn, checkOut, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Dropdown
          anchor={this.renderAnchor()}
          isOpened={this.isOpened}
          onRequestClose={this.onRequestClose}
        >
          <Calendar
            onChange={this.onChange}
            today={this.today}
            range={true}
            value={this.rangeValue}
            visibleMonths={2}
          />
        </Dropdown>
      </Wrapper>
    );
  }
}

DateRangePicker.propTypes = {
  className: PropTypes.string,
  checkIn: PropTypes.object.isRequired,
  checkOut: PropTypes.object.isRequired
};

DateRangePicker.defaultProps = {
  className: '',
  format: 'D MMM, YYYY'
};

export default DateRangePicker;
