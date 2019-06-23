import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";
import { pluralize } from "Utils/pluralize";

import BedSelector from '../BedSelector';
import Slot from "../Slot";

const Wrapper = styled.div`
  ${BedSelector} {
    margin-bottom: 33px;
  }
`;

const SlotWrapper = styled.div`
  margin-bottom: 33px;
`;

@inject("bookingState")
@observer
class MainSeats extends React.Component {
  render() {
    const { bookingState, ...rest } = this.props;

    const { bedsCount, maxBedsCount } = bookingState;

    const bedSelector = {
      max: maxBedsCount,
      selected: bedsCount
    };

    const title = 'Основных мест';

    let subTitle = pluralize(maxBedsCount, 'место', 'места', 'мест');
    subTitle = [maxBedsCount, subTitle, 'максимум'].join(' ');

    return (
      <Wrapper {...rest}>
        <BedSelector
          title={title}
          subTitle={subTitle}
          {...bedSelector}
        />

        <SlotWrapper>
          <Slot number={1} />
          <Slot number={2} />
          <Slot number={3} />
          <Slot number={4} />
        </SlotWrapper>
      </Wrapper>
    );
  }
}

MainSeats.propTypes = {
  className: PropTypes.string
};

MainSeats.defaultProps = {
  className: ''
};

export default styled(MainSeats)``;
