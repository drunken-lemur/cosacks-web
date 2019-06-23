/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Chip }) => {
  test(`Render a Chip (${name})`, () => {
    const wrapper = renderWithContext(<Chip {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
