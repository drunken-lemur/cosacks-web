import React from 'react';
import PropTypes from 'prop-types';
import { Block, Text } from 'atoms';
import { Edit, Delete } from 'icons';
import styled from 'styled-components';
import { display, typography } from 'theme/mixins';

const Wrapper = styled(Block)`
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid #d1d5db;

  & > {
    ${Block} {
      ${display('flex', 'center', 'space-between')};
    }

    ${Block} > ${Text} {
      color: #3aa6d2;
      ${typography(14, 16, 700)}
    }

    ${Block} + ${Block} {
      margin-top: 16px;

      ${Text} {
        color: #4a515c;
        ${typography(14, 16, 500)}
      }
    }

    ${Block} ${Block}{
      ${Edit} {
        margin-right: 16px;
      }

      ${Edit}, 
      ${Delete} {
        cursor: pointer;
      }
    }
    
    ${Block} ${Block} + ${Text} {
      color: #4c4c4c;
      ${typography(14, 16, 500)}
    }

    ${Block} ${Block} ${Text} {
      color: #4a515c;
      ${typography(14, 16)}
    }

    ${Block} ${Block} ${Text} + ${Text} {
      color: #979ba0;
    }
  }
`;

class ReservationGroup extends React.PureComponent {
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
        <Block>
          <Text>1 декабря – 8 декабря • 2 гостя</Text>

          <Block>
            <Edit />

            <Delete />
          </Block>
        </Block>

        <Block>
          <Text>Номер категории стандарт Базовая программа</Text>

          <Text>42 000 ₽ / 7 ночей</Text>
        </Block>

        <Block>
          <Block>
            <Text>Взрослый на основном месте</Text>

            <Text>Договор FN12887</Text>
          </Block>

          <Text>4 000 ₽</Text>
        </Block>

        <Block>
          <Block>
            <Text>Взрослый на основном месте</Text>

            <Text>Договор DG1231</Text>
          </Block>

          <Text>2 000 ₽</Text>
        </Block>
      </Wrapper>
    );
  }
}

export default styled(ReservationGroup)``;
