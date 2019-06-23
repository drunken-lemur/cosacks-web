import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexCenterBetween } from 'theme/mixins';

import { Description, OrderAndChat } from './components';

const Wrapper = styled.div`
  ${flexCenterBetween()};
  align-items: flex-start;

  ${Description} {
    margin-right: 20px;
  }
`;

class Bottom extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.object.isRequired,
    orderAndChat: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { description, orderAndChat, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Description {...description} />

        <OrderAndChat {...orderAndChat} />
      </Wrapper>
    );
  }
}

export default styled(Bottom)``;
