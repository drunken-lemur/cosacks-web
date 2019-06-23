import React from 'react';
import { Search } from 'icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, display, ruiClass } from 'theme/mixins';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import { Button, Input } from 'forms';

const Wrapper = styled.div`
  ${display('flex', 'flex-end', 'space-between')};
`;

const InnerWrapper = styled.div`
  ${display('flex', 'flex-end', 'space-between')};
`;

const Title = styled.div`
  color: #9cb4ca;
  ${typography(40, 48, 700)};
`;

const StyledButton = styled(Button)`
  ${ruiClass('rui-Button-button')} {
    ${ruiClass('rui-Button-content', 'span')} {
      height: 41px;
      padding: 0 22px;
      ${typography(13, 41, 500)};
    }
  }
`;

const StyledInput = styled(Input)`
  ${ruiClass('rui-Input-root')} {
    margin-left: 51px;
    ${ruiClass('rui-Input-input', 'input')} {
      height: 42px;
      width: 317px;
    }
  }
`;

@withRouter
@observer
class Top extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  onCreateHandler = e => {
    e.preventDefault();

    const { history } = this.props;
    history.push('/orders/new');
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <InnerWrapper>
          <Title>Заказы</Title>

          <StyledInput placeholder="Поиск заказа" iconLeft={<Search />} />
        </InnerWrapper>

        <StyledButton onClick={this.onCreateHandler}>Новый заказ</StyledButton>
      </Wrapper>
    );
  }
}

export default styled(Top)``;
