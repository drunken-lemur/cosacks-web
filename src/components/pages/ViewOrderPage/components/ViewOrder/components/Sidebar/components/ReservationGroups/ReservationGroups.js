import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Block, BlockDark, Text } from 'atoms';
import { display, typography } from 'theme/mixins';

const Caption = styled.div`
  color: white;
  padding: 4px 8px;
  background: #5ab2d6;
  border-radius: 999px;
  ${typography(10, 12)};
  ${display('flex', 'center', 'center')};
`;

const Wrapper = styled(Block)`
  --title-color: #979ba0;
  --date-text-color: #6b707b;
  --type-text-color: #4a515c;

  ${Text} {
    ${typography(14, 16, 500)};
    color: var(--title-color);
  }

  ${BlockDark} {
    margin-top: 12px;

    ${Block} {
      ${display('flex', 'center', 'space-between')};

      ${Text} {
        margin: 0;
        color: var(--date-text-color);
      }
    }

    ${Text} {
      margin-top: 16px;
      color: var(--type-text-color);
    }
  }
`;

class ReservationGroups extends React.PureComponent {
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
        <Text>Номера в заказе</Text>

        <BlockDark>
          <Block>
            <Text>2 дек – 7 дек</Text>

            <Caption>23 номера</Caption>
          </Block>

          <Text>2-мест. Стандарт Мать и дитя</Text>
        </BlockDark>

        <BlockDark>
          <Block>
            <Text>2 дек – 7 дек</Text>

            <Caption>23 номера</Caption>
          </Block>

          <Text>2-мест. Стандарт Мать и дитя</Text>
        </BlockDark>
      </Wrapper>
    );
  }
}

export default styled(ReservationGroups)``;
