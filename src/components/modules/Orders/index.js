import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
  OrdersPage,
  OrderPage,
  NewOrderPage,
  ViewOrderAgencyPage
} from 'pages';

@withRouter
@observer
class Orders extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/orders/new" component={NewOrderPage} />

        <Route exact path="/orders/:id" component={OrderPage} />

        <Route exact path="/orders/:id/edit" component={ViewOrderAgencyPage} />

        <Route exact path="/orders" component={OrdersPage} />

        <Route
          exact
          path="/orders/:id/confirm"
          component={ViewOrderAgencyPage}
        />
      </Switch>
    );
  }
}

export default Orders;
