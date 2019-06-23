/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: BookingForm }) => {
  test(`Render a BookingForm (${name})`, () => {
    const wrapper = renderWithContext(<BookingForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
