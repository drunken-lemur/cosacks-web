import React from 'react';
import { Block } from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

const Wrapper = styled(Block)`
  color: #fff;
  margin-right: 50px;
  padding: 12px 16px;
  background: #5ab2d6;
  ${typography(14, 18)};
  border-radius: 0 16px 16px 16px;
  box-shadow: 0px 3px 5px rgba(94, 202, 247, 0.45);
`;

class OutgoingMessage extends React.PureComponent {
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
        Здравствуйте. Чтобы заселить мать и ребенка в двухместный стандарт, вам
        нужно выбрать «Номер двухместный стандарт / Тариф «Мать и дитя»
      </Wrapper>
    );
  }
}

export default styled(OutgoingMessage)``;
