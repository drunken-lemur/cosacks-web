/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Month }) => {
  test(`Render a Month (${name})`, () => {
    const wrapper = renderWithContext(<Month {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
