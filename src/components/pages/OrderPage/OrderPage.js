import React from 'react';
import { DefaultTemplate } from 'templates';

import { Header } from 'organisms';
import Order from './components/Order';

const OrderPage = ({ header, order }) => (
  <DefaultTemplate
    header={<Header {...header} />}
    body={<Order {...order} />}
  />
);

export default OrderPage;
