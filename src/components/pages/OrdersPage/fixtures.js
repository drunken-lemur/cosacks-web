import component from './';

import headerMock from 'organisms/Header/fixtures';
import ordersMock from './components/Orders/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      header: headerMock[2].props,
      orders: ordersMock[0].props
    }
  }
];
