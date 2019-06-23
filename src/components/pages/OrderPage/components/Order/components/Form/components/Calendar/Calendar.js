import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import { flexCenterBetween } from 'theme/mixins';
import Loader from 'rambler-ui/Loader';

import DayPicker, { DateUtils } from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import moment from 'Utils/moment';

import { NavBar, Day } from './components';

import './style.scss';

const Wrapper = styled.div`
  ${flexCenterBetween()};
`;

@inject('bookingState', 'pricesStore')
@observer
class Calendar extends React.Component {
  @computed get disabledDays() {
    const { pricesStore } = this.props;
    return pricesStore.disabledDays;
  }

  @computed get selectedDays() {
    return [this.from, { from: this.from, to: this.to }];
  }

  @computed get initialMonth() {
    let { check_in } = this.props.pricesStore;
    return moment(check_in).toDate();
  }

  @computed get fromMonth() {
    return moment().toDate();
  }

  @computed get toMonth() {
    return moment()
      .add(11, 'month')
      .toDate();
  }

  @computed get from() {
    const { bookingState } = this.props;
    const value = bookingState.$('check_in').value;

    return value ? moment(value).toDate() : null;
  }

  @computed get to() {
    const { bookingState } = this.props;
    const value = bookingState.$('check_out').value;

    return value ? moment(value).toDate() : null;
  }

  @computed get modifiers() {
    return { start: this.from, end: this.to };
  }

  renderDay = day => {
    const { pricesStore } = this.props;

    const date = moment(day).format('Y-MM-DD');
    const priceItem = pricesStore.findOne(date);

    const available = !!priceItem ? priceItem.availability.available : -1;

    const price = !!priceItem ? priceItem.price : -1;

    return <Day day={day} price={price} available={available} />;
  };

  handleDayClick = day => {
    const { bookingState } = this.props;

    const { from, to } =
      !!this.from && !!this.to
        ? { from: day, to: null }
        : DateUtils.addDayToRange(day, { from: this.from, to: this.to });

    bookingState.setDatesPeriod({ check_in: from, check_out: to });
  };

  render() {
    const { pricesStore, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Loader loading={pricesStore.isPending}>
          <DayPicker
            locale="ru"
            localeUtils={MomentLocaleUtils}
            initialMonth={this.initialMonth}
            fromMonth={this.fromMonth}
            toMonth={this.toMonth}
            numberOfMonths={2}
            pagedNavigation={false}
            renderDay={this.renderDay}
            selectedDays={this.selectedDays}
            disabledDays={this.disabledDays}
            modifiers={this.modifiers}
            onDayClick={this.handleDayClick}
            navbarElement={NavBar}
          />
        </Loader>
      </Wrapper>
    );
  }
}

Calendar.propTypes = {
  className: PropTypes.string
};

Calendar.defaultProps = {
  className: ''
};

export default styled(Calendar)``;
