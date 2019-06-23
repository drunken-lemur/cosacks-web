import React from 'react';
import { Header } from 'organisms';
import { W1396C960Template } from 'templates';

import NewOrder from './components/NewOrder';

const NewOrderPage = ({ header, order }) => (
  <W1396C960Template
    header={<Header {...header} />}
    body={<NewOrder {...order} />}
  />
);

export default NewOrderPage;
