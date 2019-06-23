import component from './';
import rowFixture from './components/Row/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      orders: [
        rowFixture[0].props,
        rowFixture[1].props,
        rowFixture[2].props,
        rowFixture[3].props,
        rowFixture[4].props,
        rowFixture[5].props
      ]
    }
  }
];
