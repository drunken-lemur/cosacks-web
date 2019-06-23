import component from './Day';

export default [
  {
    name: 'available',
    props: {
      available: 10,
      day: 8,
      price: 7300
    },
    component
  },
  {
    name: 'low available',
    props: {
      available: 2,
      day: 8,
      price: 7300
    },
    component
  },
  {
    name: 'available and selected',
    props: {
      available: 10,
      day: 8,
      price: 7300,
      isSelected: true
    },
    component
  },
  {
    name: 'low available and selected',
    props: {
      available: 2,
      day: 8,
      price: 7300,
      isSelected: true
    },
    component
  },
  {
    name: 'not available',
    props: {
      available: 0,
      day: 9
    },
    component
  }
];
