import React from 'react';
import PropTypes from 'prop-types';
import { Block, Text } from 'atoms';
import styled from 'styled-components';

import { IncomingMessage, OutgoingMessage, TextField, Top } from './components';

const Wrapper = styled(Block)`
  width: 372px;
  height: 100%;
  display: flex;
  background: #fff;
  flex-direction: column;
  box-shadow: 0px 2px 6px rgba(36, 95, 119, 0.2);

  ${Top} + ${Block} {
    flex-grow: 1;
    overflow: scroll;
    padding: 16px 24px 0 ;

    > ${Block} {
      height: 100%;
      padding-bottom: 16px;

      /* display: flex;
      flex-direction: column;
      justify-content: flex-end; */

      > ${Text} {
        text-align: center;
          margin-bottom: 16px;
      }
    }
  }

  ${OutgoingMessage},
  ${IncomingMessage} {
    margin-bottom: 16px;
  }
`;

class Chat extends React.PureComponent {
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
        <Top />

        <Block>
          <Block>
            <Text>Сегодня</Text>

            <OutgoingMessage />

            <IncomingMessage />

            <OutgoingMessage />

            <IncomingMessage />

            <OutgoingMessage />

            <IncomingMessage />

            <OutgoingMessage />

            <IncomingMessage />

            <OutgoingMessage />
          </Block>
        </Block>

        <TextField />
      </Wrapper>
    );
  }
}

export default styled(Chat)``;
