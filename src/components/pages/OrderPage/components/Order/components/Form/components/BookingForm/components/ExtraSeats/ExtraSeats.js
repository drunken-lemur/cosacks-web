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
class ExtraSeats extends React.Component {
  render() {
    const { bookingState, ...rest } = this.props;

    const { extraBedsCount, maxExtraBedsCount } = bookingState;

    const bedSelector = {
      max: maxExtraBedsCount,
      selected: extraBedsCount
    };

    const title = 'Дополнительных мест';

    let subTitle = pluralize(maxExtraBedsCount, 'место', 'места', 'мест');
    subTitle = [maxExtraBedsCount, subTitle, 'максимум'].join(' ');

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

ExtraSeats.propTypes = {
  className: PropTypes.string
};

ExtraSeats.defaultProps = {
  className: ''
};

export default styled(ExtraSeats)``;
