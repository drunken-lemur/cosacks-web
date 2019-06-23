import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f6f8fb;
  overflow: auto;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  background: #9cb4ca;
`;

const Header = styled.div`
  width: 1394px;
  margin: 0 auto;
`;

const BodyWrapper = styled.div``;

const Body = styled.div`
  width: 1158px;
  margin: 0 auto;
  padding: 40px 0;
`;

class DefaultTemplate extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.node,
    body: PropTypes.node
  };

  static defaultProps = {
    className: '',
    header: null,
    body: null
  };

  render() {
    const { header, body, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <HeaderWrapper>
          <Header>{header}</Header>
        </HeaderWrapper>

        <BodyWrapper>
          <Body>{body}</Body>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default DefaultTemplate;
