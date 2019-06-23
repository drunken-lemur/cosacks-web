import component from './';

import src from './avatar.mock';

export default [
  {
    component,
    name: 'example',
    props: {
      src
    }
  },
  {
    component,
    name: 'example small',
    props: {
      src,
      size: 25
    }
  }
];
