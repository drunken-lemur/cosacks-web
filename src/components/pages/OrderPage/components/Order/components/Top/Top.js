import React from 'react';
import { BackLink } from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, flexCenterBetween } from 'theme/mixins';

const Wrapper = styled.div``;

const FlexContainer = styled.div`
  ${flexCenterBetween()};

  & + & {
    margin-top: 8px;
  }
`;

const Title = styled.div`
  color: #9cb4ca;
  ${typography(40, 48, 700)};
`;

class Top extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    backUrl: PropTypes.string
  };

  static defaultProps = {
    backUrl: '',
    className: ''
  };

  render() {
    const { backUrl, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <FlexContainer>
          <BackLink to={backUrl} />
        </FlexContainer>

        <FlexContainer>
          <Title>Новый заказ</Title>
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default styled(Top)``;
