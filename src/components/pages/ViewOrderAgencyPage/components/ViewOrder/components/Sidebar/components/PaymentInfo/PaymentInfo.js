import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';
import styled from 'styled-components';
import { typography } from 'theme/mixins';
import { BlockShadow, Block, Text } from 'atoms';

const Wrapper = styled(BlockShadow)`
  padding: 20px 16px;

  ${Text} {
    color: #4a515c;
    ${typography(16, 20, 700)};
  }

  ${Block} {
    margin-top: 20px;

    + ${Block} {
      margin-top: 18px;
    }

    ${Text} {
      ${typography(14, 16, 500)};

      + ${Text} {
        margin-top: 8px;
        ${typography(14, 16)};
      }
    }
  }
`;

class PaymentInfo extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    payUtil: PropTypes.string,
    initialCost: PropTypes.number,
    commission: PropTypes.number,
    freeCancel: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {
      payUtil,
      initialCost,
      commission,
      freeCancel,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <Text>Информация об оплате</Text>

        <Block>
          <Text>Оплатить до</Text>

          <Text>{payUtil}</Text>
        </Block>

        <Block>
          <Text>Начальная стоимость</Text>

          <Text>{formatPrice(initialCost)}</Text>
        </Block>

        <Block>
          <Text>Комиссия</Text>

          <Text>
            {formatPrice(initialCost * (commission / 100))} {commission}%
          </Text>
        </Block>

        <Block>
          <Text>Бесплатная отмена</Text>

          <Text>{freeCancel}</Text>
        </Block>
      </Wrapper>
    );
  }
}

export default styled(PaymentInfo)``;
