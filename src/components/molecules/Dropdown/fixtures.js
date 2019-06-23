import React from 'react';
import { Calendar } from 'organisms';
import { Logo } from 'icons';
import { Button, Input } from 'forms';
import styled from 'styled-components';

import component from './';

const calendar = (
  <Calendar
    range
    visibleMonths={2}
    today={new Date(2019, 5, 1)}
    value={[new Date(2019, 4, 5), new Date(2019, 5, 6)]}
  />
);

const StyledLogo = styled(Logo)`
  padding: 40px;
  path {
    fill: #5ab2d6;
  }
`;

export default [
  {
    component,
    name: 'With Button & Logo',
    props: {
      children: <StyledLogo />,
      anchor: <Button>Click Me</Button>,
      isOpened: true,
      onRequestClose: (...args) => {
        console.log('args', args);
      }
    }
  },
  {
    component,
    name: 'With Input & Calendar',
    props: {
      children: calendar,
      anchor: <Input />,
      isOpened: true,
      onRequestClose: (...args) => {
        console.log('args', args);
      }
    }
  }
];
