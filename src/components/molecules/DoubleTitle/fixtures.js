import React from 'react';

import component from './';

export default [
  {
    component,
    name: 'example',
    props: {
      title: 'Основные места',
      subTitle: '4 места максимум',
      children: <h3>Some component</h3>
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      title: 'Дополнительные места',
      subTitle: '2 места максимум',
      children: <h3>Some component</h3>
    }
  }
];
