import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Block, Text } from 'atoms';
import styled from 'styled-components';
import { display, typography } from 'theme/mixins';

const Wrapper = styled(Block)`
  height: 54px;
  padding: 8px 16px;
  background: #e5e8ed;

  ${display('flex', 'center')}

  ${Avatar} {
    margin-right: 16px;
  }

  ${Block} {
    ${Text} {
      color: #4a515c;
      ${typography(16, 20, 700)};
    }

    ${Text} + ${Text} {
      ${typography(14, 18)};
    }
  }
`;

class Top extends React.PureComponent {
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
        <Avatar size={38} />

        <Block>
          <Text>Оксана</Text>

          <Text>Консультант по подбору номеров</Text>
        </Block>
      </Wrapper>
    );
  }
}

export default styled(Top)``;
