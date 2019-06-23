/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Bottom }) => {
  test(`Render a Bottom (${name})`, () => {
    const wrapper = renderWithContext(<Bottom {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
