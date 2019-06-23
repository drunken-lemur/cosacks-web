import React from 'react';
import { Header } from 'organisms';
import { FluidTemplate } from 'templates';

import Hotels from './components/Hotels';

const HotelsPage = ({ header, hotels }) => (
  <FluidTemplate
    header={<Header {...header} />}
    body={<Hotels {...hotels} />}
  />
);

export default HotelsPage;
