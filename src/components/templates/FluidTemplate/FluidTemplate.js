import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f6f8fb;
  overflow: auto;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  background: #9cb4ca;
`;

const Header = styled.div``;

const BodyWrapper = styled.div`
  height: 100%;
`;

const Body = styled.div`
  height: 100%;
`;

const FooterWrapper = styled.div``;

const Footer = styled.div``;

class FluidTemplate extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.node,
    body: PropTypes.node,
    footer: PropTypes.node
  };

  static defaultProps = {
    className: '',
    header: null,
    body: null,
    footer: null
  };

  render() {
    const { header, body, footer, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <HeaderWrapper>
          <Header>{header}</Header>
        </HeaderWrapper>

        <BodyWrapper>
          <Body>{body}</Body>
        </BodyWrapper>

        <FooterWrapper>
          <Footer>{footer}</Footer>
        </FooterWrapper>
      </Wrapper>
    );
  }
}

export default FluidTemplate;
