/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: UserBar }) => {
  test(`Render a UserBar (${name})`, () => {
    const wrapper = renderWithContext(<UserBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
