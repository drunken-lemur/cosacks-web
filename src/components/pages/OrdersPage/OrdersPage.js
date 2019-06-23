import React from 'react';
import { Header } from 'organisms';
import { DefaultTemplate } from 'templates';

import Orders from './components/Orders';

const OrdersPage = ({ header, orders }) => (
  <DefaultTemplate
    header={<Header {...header} />}
    body={<Orders {...orders} />}
  />
);

export default OrdersPage;
