import component from './';
import filtersFixture from './components/FilterBar/fixtures';
import tableFixture from './components/Table/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      filters: filtersFixture[0].props.filters,
      orders: tableFixture[0].props.orders
    }
  }
];
