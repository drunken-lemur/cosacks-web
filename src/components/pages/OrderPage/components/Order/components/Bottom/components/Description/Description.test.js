/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Description }) => {
  test(`Render a Description (${name})`, () => {
    const wrapper = renderWithContext(<Description {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
