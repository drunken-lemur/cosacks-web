import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';
import { Block, BlockShadow, Text, Line, Link } from 'atoms';

const Wrapper = styled(BlockShadow)`
  padding: 20px 16px;

  ${Text}.title {
    color: #4a515c;
    ${typography(16, 20, 700)};
  }

  ${Text}.address {
    margin: 16px 0;
  }

  ${Line} {
    margin: 12px 0;
  }

  ${Block} {
    ${Text}.name {
      ${typography(14, 16, 500)};
    }

    ${Text} + ${Text} {
      margin-top: 8px;
    }
  }

  ${Block} + ${Block} {
    margin-top: 16px;
  }

  ${Link} {
    margin-top: 20px;
    ${typography(14, 16)};
    display: inline-block;
  }
`;

class HotelInfo extends React.PureComponent {
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
        <Text className="title">Санаторий "Лесная новь" им. Ю.Ф. Янтарева</Text>

        <Text className="address">
          Кировская обл., поселок Нижние серьги, ул. Иванова-Николаева, 45
        </Text>

        <Text>+7 (914) 123 12 12</Text>

        <Line />

        <Block>
          <Text className="name">Отдел бронирования:</Text>
          <Text>+7 (914) 123 12 12</Text>
          <Text>userpuser@yandex.ru</Text>
        </Block>

        <Block>
          <Text className="name">Отдел бронирования:</Text>
          <Text>+7 (914) 123 12 12</Text>
          <Text>userpuser@yandex.ru</Text>
        </Block>

        <Link to="#">Подробное описание</Link>
      </Wrapper>
    );
  }
}

export default styled(HotelInfo)``;
