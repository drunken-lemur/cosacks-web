import component from './';

import headerMock from 'organisms/Header/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      header: headerMock[2].props
    }
  }
];
