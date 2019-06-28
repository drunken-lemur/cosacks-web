import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f6f8fb;
`;

const HeaderWrapper = styled.div`
  background: #9cb4ca;
`;

const BodyWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

const FooterWrapper = styled.div``;

class Default extends React.PureComponent {
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
        <HeaderWrapper>{header}</HeaderWrapper>

        <BodyWrapper>{body}</BodyWrapper>

        <FooterWrapper>{footer}</FooterWrapper>
      </Wrapper>
    );
  }
}

export default Default;
