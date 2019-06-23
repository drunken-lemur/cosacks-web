import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  background: #f6f8fb;
  grid-template-areas:
    'header'
    'center'
    'footer';
  grid-template-rows: 1fr;
  grid-template-rows: 60px 1fr 60px;
`;

const Header = styled.div`
  grid-area: 'header';
`;

const Center = styled.div`
  grid-area: 'center';
`;

const Footer = styled.div`
  grid-area: 'footer';
`;

const Page = styled.div`
  height: 100%;
  background: grey;
`;

class GridTemplate extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Header>Header</Header>

        <Center>
          <Page>Page</Page>
        </Center>

        <Footer>Footer</Footer>
      </Wrapper>
    );
  }
}

export default GridTemplate;
