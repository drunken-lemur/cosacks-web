/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({name, props, component: Avatar}) => {
  test(`Render a Avatar (${name})`, () => {
    const wrapper = renderWithContext(<Avatar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
