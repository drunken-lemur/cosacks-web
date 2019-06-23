/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Day }) => {
  test(`Render a Day (${name})`, () => {
    const wrapper = renderWithContext(<Day {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
