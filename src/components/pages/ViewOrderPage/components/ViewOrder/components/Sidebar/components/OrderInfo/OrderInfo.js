import React from 'react';
import PropTypes from 'prop-types';
import { Block, BlockDark, Text } from 'atoms';
import styled from 'styled-components';
import { typography, display } from 'theme/mixins';

const Wrapper = styled(BlockDark)`
  ${Text} {
    ${typography(16, 20)};
    color: var(--title-color);
  }

  ${Block} {
    margin-top: 12px;

    ${display('flex', 'center', 'space-between')};

    ${Text} {
      ${typography(14, 16)};
      color: var(--text-color);
    }

    ${Text} + ${Text} {
      color: var(--value-color);
      ${typography(14, 16, 500)}; 
    }
  }
`;

class OrderInfo extends React.PureComponent {
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
        <Text>36 номеров / 13 гостей</Text>

        <Block>
          <Text>Заезд – выезд</Text>

          <Text>2 дек – 28 дек</Text>
        </Block>

        <Block>
          <Text>Договор</Text>

          <Text>LM12121</Text>
        </Block>

        <Block>
          <Text>По страховке</Text>

          <Text>456 000 ₽</Text>
        </Block>

        <Block>
          <Text>За наличные</Text>

          <Text>23 000 ₽</Text>
        </Block>
      </Wrapper>
    );
  }
}

export default styled(OrderInfo)``;
