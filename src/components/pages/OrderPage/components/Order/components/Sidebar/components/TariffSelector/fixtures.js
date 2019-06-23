import component from './TariffSelector';
import roomTypeMock from './components/RoomType/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      roomTypes: [
        roomTypeMock[1].props,
        roomTypeMock[0].props,
        roomTypeMock[2].props,
        roomTypeMock[3].props
      ]
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      roomTypes: [
        roomTypeMock[2].props,
        roomTypeMock[2].props,
        roomTypeMock[1].props,
        roomTypeMock[3].props
      ]
    }
  }
];
