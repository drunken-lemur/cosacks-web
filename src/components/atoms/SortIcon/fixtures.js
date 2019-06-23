import component from './';

export default [
  {
    component,
    name: 'example',
    props: {}
  },
  {
    component,
    name: 'example asc',
    props: {
      sort: 'asc'
    }
  },
  {
    component,
    name: 'example desc',
    props: {
      sort: 'desc'
    }
  }
];
