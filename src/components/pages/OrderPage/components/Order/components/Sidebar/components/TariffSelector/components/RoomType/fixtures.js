import component from './RoomType';

export default [
  {
    component,
    name: 'example 1',
    props: {
      title: 'Номер категории стандарт',
      type: 'Базовая программа',
      price: 4000,
      days: 7
    }
  },
  {
    component,
    name: 'example 1 selected',
    props: {
      isSelected: true,
      title: 'Номер категории стандарт',
      type: 'Базовая программа',
      price: 4000,
      days: 7
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      title: 'Номер сьют',
      type: 'Отдых с детьми',
      price: 4000,
      days: 1
    }
  },
  {
    component,
    name: 'example 3',
    props: {
      title: 'Номер люкс',
      type: 'Отдых с детьми',
      price: 4000,
      days: 1
    }
  }
];
