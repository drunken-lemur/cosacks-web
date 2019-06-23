import component from './';

import headerMock from 'organisms/Header/fixtures';
import newOrderFixtures from './components/NewOrder/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      header: headerMock[2].props,
      order: newOrderFixtures[0].props
    }
  }
];
