import React from 'react';
import { Block } from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

const Wrapper = styled(Block)`
  color: #4a515c;
  background: #fff;
  margin-left: 50px;
  padding: 12px 16px;
  ${typography(14, 18)};
  border-radius: 16px 0 16px 16px;
  box-shadow: 0px 2px 6px rgba(36, 95, 119, 0.21);
`;

class IncomingMessage extends React.PureComponent {
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
        Здравствуйте, а почему я не могу заселить мать и ребенка в двухместный
        стандарт?
      </Wrapper>
    );
  }
}

export default styled(IncomingMessage)``;
