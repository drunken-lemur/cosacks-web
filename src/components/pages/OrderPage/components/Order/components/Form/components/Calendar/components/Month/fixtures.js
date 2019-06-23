import component from './Month';

import { november, december } from './mock';

export default [
  {
    component,
    name: 'november',
    props: {
      title: 'Ноябрь 2019',
      days: november
    }
  },
  {
    component,
    name: 'december',
    props: {
      title: 'Ноябрь 2019',
      days: december
    }
  }
];
