import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

import { AddTraveller, Traveller } from './components';
import { observer } from 'mobx-react';

const Wrapper = styled.div`
  counter-reset: slot;

  ${AddTraveller} {
    margin-bottom: 16px;
  }

  ${Traveller} {
    ::before {
      color: #4a515c;
      ${typography(14, 16, 700)};

      counter-increment: slot;
      content: counter(slot) '.';
    }

    + ${Traveller} {
      margin-top: 10px;
    }
  }
`;

@observer
class Travellers extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    travellers: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { travellers, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <AddTraveller travellers={travellers} />

        {Array.from(travellers.fields.values()).map(traveller => (
          <Traveller key={traveller.id} traveller={traveller} />
        ))}
      </Wrapper>
    );
  }
}

export default styled(Travellers)``;
