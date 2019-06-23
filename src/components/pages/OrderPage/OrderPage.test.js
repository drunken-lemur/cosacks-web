/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: OrderPage }) => {
  test(`Render a OrderPage (${name})`, () => {
    const wrapper = renderWithContext(<OrderPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
