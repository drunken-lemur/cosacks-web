import component from './BookingForm';
import insuranceMock from './components/Insurance/fixtures';
import bedSelectorMock from './components/BedSelector/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      insurance: insuranceMock[0].props,
      bedSelector: bedSelectorMock[0].props,
      advBedSelector: bedSelectorMock[1].props
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      insurance: insuranceMock[1].props,
      bedSelector: bedSelectorMock[0].props,
      advBedSelector: bedSelectorMock[1].props
    }
  }
];
