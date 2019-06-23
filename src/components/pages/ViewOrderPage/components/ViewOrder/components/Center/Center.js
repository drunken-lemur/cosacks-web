import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';
import { BlockShadow, Text } from 'atoms';

import { ReservationGroup } from './components';

const Wrapper = styled(BlockShadow)`
  width: 620px;

  & > {
    ${Text} {
      ${typography(16, 20, 700)};
    }

    ${ReservationGroup} {
      margin-top: 20px;
    }
  }
`;

class Center extends React.PureComponent {
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
        <Text>Номера и гости</Text>

        <ReservationGroup />

        <ReservationGroup />

        <ReservationGroup />

        <ReservationGroup />
      </Wrapper>
    );
  }
}

export default styled(Center)``;
