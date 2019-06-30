import component from './';

export default [
  {
    component,
    name: 'reserved',
    props: {variant: 'reserved', children: 'Забронирован'}
  },
  {
    component,
    name: 'accepted',
    props: {variant: 'accepted', children: 'Подтвержден'}
  },
  {
    component,
    name: 'canceled',
    props: {variant: 'canceled', children: 'Отменен'}
  },
  {
    component,
    name: 'accepted1c',
    props: {variant: 'accepted1c', children: 'Подтвержден'}
  },
  {
    component,
    name: 'error',
    props: {variant: 'error', children: 'Ошибка'}
  }
];
