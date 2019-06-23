/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: RoomType }) => {
  test(`Render a RoomType (${name})`, () => {
    const wrapper = renderWithContext(<RoomType {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
