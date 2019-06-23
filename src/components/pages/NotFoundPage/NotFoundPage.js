import React from 'react';
import styled from 'styled-components';
import { DefaultTemplate } from 'templates';

const Wrapper = styled.div``;

const body = (
  <Wrapper>
    <h1>Page not found</h1>
  </Wrapper>
);

const NotFoundPage = () => <DefaultTemplate body={body} />;

export default NotFoundPage;
