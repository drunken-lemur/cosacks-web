/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Form }) => {
  test(`Render a Form (${name})`, () => {
    const wrapper = renderWithContext(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
