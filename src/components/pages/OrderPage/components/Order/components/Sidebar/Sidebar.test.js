/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Sidebar }) => {
  test(`Render a Sidebar (${name})`, () => {
    const wrapper = renderWithContext(<Sidebar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
