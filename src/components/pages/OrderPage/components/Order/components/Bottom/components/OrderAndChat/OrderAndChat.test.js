/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: OrderAndChat }) => {
  test(`Render a OrderAndChat (${name})`, () => {
    const wrapper = renderWithContext(<OrderAndChat {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
