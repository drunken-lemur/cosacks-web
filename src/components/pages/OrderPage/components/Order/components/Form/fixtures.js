import component from './Form';

import calendarMock from './components/Calendar/fixtures';
import bookingFormMock from './components/BookingForm/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      calendar: calendarMock[0].props,
      bookingForm: bookingFormMock[0].props
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      calendar: calendarMock[0].props,
      bookingForm: bookingFormMock[1].props
    }
  }
];
