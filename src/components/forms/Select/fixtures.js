import React from 'react';
import { CircleArrow } from 'icons';
import PhoneIcon from 'rambler-ui/icons/forms/PhoneIcon';

import component from './';

const items = [
  {
    label: 'Bar 1',
    value: 'bar1'
  },
  {
    label: 'Bar 2',
    value: 'bar2'
  },
  {
    label: 'Bar 3',
    value: 'bar3'
  },
  {
    label: 'Bar 4',
    value: 'bar4'
  },
  {
    label: 'Bar 5',
    value: 'bar5'
  },
  {
    label: 'Bar 6',
    value: 'bar6'
  },
  {
    label: 'Bar 7',
    value: 'bar7'
  },
  {
    label: 'Bar 8',
    value: 'bar8'
  },
  {
    label: 'Bar 9',
    value: 'bar9'
  },
  {
    label: 'Bar 10',
    value: 'bar10'
  }
];

export default [
  {
    component,
    name: 'example',
    props: {
      icon: <PhoneIcon />,
      items,
      onChange: i => console.log(i)
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      icon: <CircleArrow />,
      items,
      value: items[2],
      onChange: i => console.log(i)
    }
  }
];
