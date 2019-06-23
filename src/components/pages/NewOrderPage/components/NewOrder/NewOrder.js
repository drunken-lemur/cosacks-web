import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Provider, observer } from "mobx-react";
import { typography } from 'theme/mixins';
import { withRouter } from "react-router-dom";

import { BackLink, Line } from 'atoms';
import { OrderForm, FavoriteHotels } from './components';

import SearchState, { fields } from "Forms/Orders/SearchState";
import OrderStore from "Stores/OrdersStore/One";

const SubTitle = styled.div`
  color: #979ba0;
  margin-top: 32px;
  ${typography(20, 24, 700)};
`;

const Wrapper = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;

  ${BackLink} {
    margin: 36px 0 28px;
    display: inline-block;
  }

  ${Line} {
    margin: 16px 0 32px;
  }
`;

@withRouter
@observer
class NewOrder extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    hotels: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        rating: PropTypes.number,
        address: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
      })
    )
  };

  static defaultProps = {
    className: '',
    hotels: []
  };

  constructor(props) {
    super(props);

    // Initialize form
    const hooks = {
      onSuccess: this.onSuccessHandler,
      onError: this.onErrorHandler
    }

    this.searchState = new SearchState(fields, { hooks });

    // Initialize store
    this.orderStore = OrderStore.create();
  }

  onSuccessHandler = (form) => {
    const values = form.values();

    this.orderStore.create(values)
      .then(store => this.navigateTo(store))
  }

  onErrorHandler = (form) => {
    console.log(form.errors())
  }

  navigateTo = (store) => {
    const { history } = this.props;

    const url = ['/orders', store.data.id].join('/')
    history.replace(url)
  }

  render() {
    const { hotels, ...rest } = this.props;

    return (
      <Provider
        searchState={this.searchState}
        orderStore={this.orderStore}
      >
        <Wrapper {...rest}>
          <BackLink />

          <OrderForm />

          <SubTitle>Избранные санатории</SubTitle>

          <Line />

          <FavoriteHotels hotels={hotels} />
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(NewOrder)``;
