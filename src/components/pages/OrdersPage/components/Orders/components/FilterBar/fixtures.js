import component from './';
import FilterMock from './components/Filter/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      filters: [FilterMock[0].props, FilterMock[1].props, FilterMock[2].props]
    }
  }
];
