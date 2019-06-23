/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: TariffSelector }) => {
  test(`Render a TariffSelector (${name})`, () => {
    const wrapper = renderWithContext(<TariffSelector {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
