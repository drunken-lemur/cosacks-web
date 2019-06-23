import component from './';

const today = new Date(2018, 5, 15);
const maxDate = new Date(2018, 5, 15);

const dateFrom = null;
const dateTo = null;

export default [
  {
    component,
    name: 'example 1',
    props: {
      onChange: (...args) => console.log('args:', ...args)
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      range: true,
      visibleMonths: 2,
      value: [dateFrom, dateTo],
      onChange: (...args) => console.log('args:', ...args)
    }
  },
  {
    component,
    name: 'example 3',
    props: {
      today,
      maxDate,
      range: true,
      visibleMonths: 2,
      value: [dateFrom, dateTo],
      onChange: (...args) => console.log('args:', ...args)
    }
  }
];
