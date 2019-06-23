import component from './';

const placeholder = 'Выберите дату';

export default [
  {
    component,
    name: 'example',
    props: {
      placeholder,
      onChange: date => console.log('date', date)
    }
  },
  {
    component,
    name: 'example with range',
    props: {
      placeholder,
      range: true,
      visibleMonths: 2,
      onChange: date => console.log('date', date)
    }
  }
];
