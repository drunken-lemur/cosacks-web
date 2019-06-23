import React from 'react';
import { Header } from 'organisms';
import styled from 'styled-components';
import { DefaultTemplate } from 'templates';
import fixtures from 'forms/Select/fixtures';

import { Select } from 'forms';

const Wrapper = styled.div``;

const body = (
  <Wrapper>
    <Select {...fixtures[1].props} />
    <h1>Home Page. Welcome!</h1>
  </Wrapper>
);

const HomePage = ({ header }) => (
  <DefaultTemplate header={<Header {...header} />} body={body} />
);

export default HomePage;
