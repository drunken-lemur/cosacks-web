import component from './Calendar';

import monthMock from './components/Month/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      monthFirst: monthMock[0].props,
      monthSecond: monthMock[1].props
    }
  }
];
