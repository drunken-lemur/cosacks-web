import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { Line, BackLink } from 'atoms';

import { Center, Sidebar, Top } from './components';

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;

  ${Flex} {
    /* margin-top: 20px; */
  }

  ${BackLink} {
    margin: 36px 0 24px;
    display: inline-block;
  }
`;

class ViewOrder extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { sanatories, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <BackLink />

        {false && <Top />}

        <Flex justifyBetween alignStart>
          <Sidebar />

          <Center />
        </Flex>

        <Line />
      </Wrapper>
    );
  }
}

export default styled(ViewOrder)``;
