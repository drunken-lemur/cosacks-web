/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Badge }) => {
  test(`Render a Badge (${name})`, () => {
    const wrapper = renderWithContext(<Badge {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
