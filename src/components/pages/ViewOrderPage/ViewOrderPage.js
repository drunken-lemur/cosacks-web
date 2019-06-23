import React from 'react';
import { Header } from 'organisms';
import { FluidTemplate } from 'templates';

import ViewOrder from './components/ViewOrder';

const ViewOrderPage = ({ header, order }) => (
  <FluidTemplate
    header={<Header {...header} />}
    body={<ViewOrder {...order} />}
  />
);

export default ViewOrderPage;
