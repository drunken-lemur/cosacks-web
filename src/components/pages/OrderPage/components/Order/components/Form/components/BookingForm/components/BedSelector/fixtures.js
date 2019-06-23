import component from './';
import { logAction } from 'utils';

const onSelect = logAction('onSelected');

export default [
  {
    component,
    name: 'example',
    props: {
      max: 4,
      selected: 3,
      title: 'Основные места',
      subTitle: '4 места максимум',
      onSelect
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      max: 2,
      selected: 1,
      title: 'Дополнительные места',
      subTitle: '2 места максимум',
      onSelect
    }
  }
];
