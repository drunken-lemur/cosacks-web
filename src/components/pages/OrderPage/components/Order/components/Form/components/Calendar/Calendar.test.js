/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Calendar }) => {
  test(`Render a Calendar (${name})`, () => {
    const wrapper = renderWithContext(<Calendar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
