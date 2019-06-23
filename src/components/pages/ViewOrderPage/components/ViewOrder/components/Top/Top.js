import React from 'react';
import { Check } from 'icons';
import { Button } from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Block, BlockShadow } from 'atoms';
import { display, typography } from 'theme/mixins';

const Wrapper = styled(BlockShadow)`
  --border-radius: 4px;
  --triangle-size: 32px;
  --triangle-color: #29c875;
  --text-color: #4a515c;
  --cancel-color: #cb3333;
  --cancel-border-color: #e26161;
  --link-button-color: #3c6f9d;

  height: 112px;
  padding: 28px;
  position: relative;
  ${display('flex', 'center', 'space-between')};
  box-shadow: 0px 2px 6px rgba(36, 95, 119, 0.2);

  ::after {
    top: 0; 
    left: 0;
    z-index: 1;
    content: '';
    position: absolute;
    border: calc(var(--triangle-size) / 2) solid transparent;
    border-radius: var(--border-radius) 0 0 0;
    border-top: calc(var(--triangle-size) / 2) solid var(--triangle-color);
    border-left: calc(var(--triangle-size) / 2) solid var(--triangle-color);
  }

  ${Check} {
    top: 6px;
    left: 5px;
    z-index: 2;
    position: absolute;
  }

  ${Block}.order {
    color: var(--text-color);
    ${typography(30, 36, 700)};
  }

  ${Block}.group {
    color: var(--text-color);
    ${typography(14, 16, 500)};
  }

  ${Block}.buttons {
    ${Button} + ${Button} {
      margin-left: 20px;
    }

    ${Button}.cancel {
      ::before,
      ::after {
        border-color: var(--cancel-border-color);
      }
      span {
        color: var(--cancel-color);
      }

      :hover {
        ::before,
        ::after {
          border-color: var(--cancel-color);
        }
        span {
          color: var(--cancel-border-color);
        }
      }
    }

    ${Button}.link {
      span {
        padding: 0; 
        color: var(--link-button-color);
      }   
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
        <Check />

        <Block>
          <Block className="order">№123123</Block>

          <Block className="group">Группа №1</Block>
        </Block>

        <Block className="buttons">
          <Button variant="outline" rounded>
            Добавить номер
          </Button>

          <Button className="cancel" variant="outline" rounded>
            Отменить заказ
          </Button>

          <Button className="link" variant="flat">
            Выгрузить XLS
          </Button>

          <Button className="link" variant="flat">
            История
          </Button>
        </Block>
      </Wrapper>
    );
  }
}

export default styled(Top)``;
