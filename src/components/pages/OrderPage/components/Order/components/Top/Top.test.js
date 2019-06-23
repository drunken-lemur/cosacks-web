/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Top }) => {
  test(`Render a Top (${name})`, () => {
    const wrapper = renderWithContext(<Top {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
