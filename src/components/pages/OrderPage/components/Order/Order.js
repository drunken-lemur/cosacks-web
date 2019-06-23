import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Provider, observer } from 'mobx-react';
import { reaction, computed } from 'mobx';
import { flexCenterBetween } from 'theme/mixins';
import { withRouter } from 'react-router-dom';

import { Bottom, Form, Sidebar, Top } from './components';

import OrderStore from 'Stores/OrdersStore/One';
import HotelsInfo from 'Stores/HotelsStore/Info';

import BookingState, { fields } from 'Forms/Orders/BookingState';

export const Wrapper = styled.div`
  width: 1158px;

  ${Top} {
    margin-bottom: 24px;
  }

  ${Form} {
    margin-bottom: 20px;
  }
`;

export const InnerWrapper = styled.div`
  ${flexCenterBetween()};
  align-items: flex-start;
`;

@withRouter
@observer
class Order extends React.Component {
  constructor(props) {
    super(props);

    // Init booking state
    this.bookingState = new BookingState(fields);

    // Init order state
    this.orderStore = OrderStore.create();

    // Init hotels info
    this.hotelsInfo = HotelsInfo.create();
  }

  componentDidMount() {
    const { params } = this.props.match;

    this.hotelsInfoHandler = reaction(
      () => this.orderStore.isFetched,
      isFetched => {
        if (!isFetched) return;

        const params = this.orderStore.data.hotel.toJSON();
        this.hotelsInfo.fetch(params);
      }
    );

    this.orderStore.fetch(params);
  }

  componentWillUnmount() {
    this.hotelsInfoHandler();
  }

  @computed get formId() {
    return this.bookingState.tariff && this.bookingState.tariff.id;
  }

  render() {
    const { top, sidebar, bottom, ...rest } = this.props;

    return (
      <Provider
        bookingState={this.bookingState}
        orderStore={this.orderStore}
        hotelsInfo={this.hotelsInfo}
      >
        <Wrapper {...rest}>
          <Top {...top} />

          {!!this.orderStore.data && (
            <InnerWrapper>
              <Sidebar {...sidebar} />

              {this.bookingState.hasAvailability && (
                <div>
                  <Form key={this.formId} />
                  <Bottom {...bottom} />
                </div>
              )}
            </InnerWrapper>
          )}
        </Wrapper>
      </Provider>
    );
  }
}

Order.defaultProps = {
  className: ''
};

Order.propTypes = {
  className: PropTypes.string,
  top: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  bottom: PropTypes.object.isRequired
};

export default Order;
