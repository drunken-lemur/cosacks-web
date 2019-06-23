import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

const Wrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  padding-right: 24px;
`;

const Title = styled.div`
  color: #4a515c;
  ${typography(16, 24, 600)};
`;

const SubTitle = styled.div`
  color: #979ba0;
  ${typography(12, 14)};
`;

class DoubleTitle extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { title, subTitle, children, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <TitleWrapper>
          <Title>{title}</Title>

          <SubTitle>{subTitle}</SubTitle>
        </TitleWrapper>

        {children}
      </Wrapper>
    );
  }
}

export default styled(DoubleTitle)``;
