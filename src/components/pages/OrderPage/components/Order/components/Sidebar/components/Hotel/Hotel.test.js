/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Sanatory }) => {
  test(`Render a Sanatory (${name})`, () => {
    const wrapper = renderWithContext(<Sanatory {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
