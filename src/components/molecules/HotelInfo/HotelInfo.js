import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';
import { BlockShadow, Block, Text, Link } from 'atoms';

const Wrapper = styled(BlockShadow)`
  padding: 0;
  width: 320px;

  img {
    display: block;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  ${Block} {
    padding: var(--padding);
    padding-top: 12px;

    ${Text}.title {
      color: #4a515c;
      padding-bottom: 10px;
      ${typography(16, 20, 700)};
    }

    ${Text} {
      color: #6b707b;
      ${typography(14, 16)};

      + ${Text} {
        margin-top: 5px;
      }
    }

    ${Link} {
      color: #3c6f9d;
      margin-top: 10px;
      display: inline-block;
      ${typography(14, 16, 500)};
    }
  }
`;

class HotelInfo extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    link: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { image, name, address, phone, link, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <img src={image} alt={name} />

        <Block>
          <Text className="title">{name}</Text>

          <Text>{address}</Text>

          <Text>{phone}</Text>

          <Link to={link}>Подробное описание</Link>
        </Block>
      </Wrapper>
    );
  }
}

export default styled(HotelInfo)``;
