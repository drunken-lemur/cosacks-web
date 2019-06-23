import component from './';

import headerMock from 'organisms/Header/fixtures';
import hotelsMock from './components/Hotels/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      header: headerMock[2].props,
      hotels: hotelsMock[0].props
    }
  }
];
