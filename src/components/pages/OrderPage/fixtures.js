import component from './OrderPage';

import headerMock from 'organisms/Header/fixtures';
import orderMock from './components/Order/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      header: headerMock[0].props,
      order: orderMock[0].props
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      header: headerMock[1].props,
      order: orderMock[1].props
    }
  }
];
