import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Provider, observer, inject } from "mobx-react";
import { reaction } from "mobx";
import { typography } from 'theme/mixins';

import moment from "Utils/moment";
import _debounce from "lodash/debounce";

import { Calendar, BookingForm } from './components';

import PricesStore from "Stores/TariffsStore/PricesStore";

const Wrapper = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(36, 95, 119, 0.21);

  ${Calendar} {
    margin: 38px 0 0;
  }

  ${BookingForm} {
    margin-top: 45px;
  }
`;

const Title = styled.div`
  color: #4a515c;
  ${typography(20, 24, 700)};
`;

@inject("bookingState")
@observer
class Form extends React.Component {
  constructor(props) {
    super(props);

    // Initialize prices store
    const { bookingState } = this.props;
    const { hotel, tariff, room_type } = this.props.bookingState;

    let { check_in, check_out } = bookingState.values();
    check_in = moment(check_in).startOf('month').format('YYYY-MM-DD');
    check_out = moment(check_in).add(1, 'month').endOf('month').format('YYYY-MM-DD')

    const options = {
      hotel_id: hotel.id,
      room_type_id: room_type.id,
      tariff_id: tariff.id,
      check_in: check_in,
      check_out: check_out
    }

    this.pricesStore = PricesStore.create(options);
  }

  componentDidMount() {
    this.addHandlers();
  }

  componentWillUnmount() {
    this.delHandlers();
    this.clearPricesStore();
  }

  addHandlers() {
    this.fetchPricesStore()
    this.datesChangeHandler();
    this.guestsChangeHandler();
  }

  delHandlers() {
    this._datesChangeHandler();
    this._guestsChangeHandler();
  }

  datesChangeHandler = () => {
    this._datesChangeHandler = reaction(
      () => {
        const { check_in, check_out } = this.pricesStore;
        return { check_in, check_out };
      },
      ({ check_in, check_out }) => {
        if (!!check_in && !!check_out) this.fetchPricesStore()
      }
    )
  }

  guestsChangeHandler = () => {
    const { bookingState } = this.props;

    this._guestsChangeHandler = reaction(
      () => bookingState.travellersOpts,
      (travellers) => travellers.length > 0 && this.fetchPricesStore()
    )
  }

  fetchPricesStore = _debounce(_ => {
    const { bookingState } = this.props;
    const travellers = bookingState.travellersOpts;

    return this.pricesStore.fetch({ travellers })
      .then(_ => this.setAvailabilityPrices())
  }, 100)

  setAvailabilityPrices = () => {
    const { discount_percent, prices } = this.pricesStore;
    const { bookingState } = this.props;

    bookingState.setPrices({ prices, discount_percent });

    const check_in = bookingState.$('check_in').value;
    const check_out = bookingState.$('check_out').value;
    const travellers = bookingState.$('travellers').value;

    bookingState.calcPrice({ check_in, check_out, travellers })
  }

  clearPricesStore = () => {
    this.pricesStore.clear()
  }

  render() {
    const { bookingState, ...rest } = this.props;

    const { room_type, tariff } = bookingState;
    const title = [room_type.name, tariff.name].join(' / ');

    return (
      <Provider
        pricesStore={this.pricesStore}
      >
        <Wrapper {...rest}>
          <Title>{title}</Title>
          <Calendar />
          <BookingForm />
        </Wrapper>
      </Provider>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  calendar: PropTypes.object.isRequired
};

Form.defaultProps = {
  className: ''
};

export default styled(Form)``;
