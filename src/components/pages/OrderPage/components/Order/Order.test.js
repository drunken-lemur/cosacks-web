/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Order }) => {
  test(`Render a Order (${name})`, () => {
    const wrapper = renderWithContext(<Order {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
