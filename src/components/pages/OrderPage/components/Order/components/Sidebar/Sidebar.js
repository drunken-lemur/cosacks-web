import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";
import styled from 'styled-components';

import { Hotel, TariffSelector } from './components';

const Wrapper = styled.div`
  ${TariffSelector} {
    margin-top: 33px;
  }
`;

@observer
class Sidebar extends React.Component {
  render() {
    const { rooms, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Hotel />

        <TariffSelector {...rooms} />
      </Wrapper>
    );
  }
}

Sidebar.defaultProps = {
  className: ''
}

Sidebar.propTypes = {
  className: PropTypes.string,
  sanatory: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired
}

export default styled(Sidebar)``;
