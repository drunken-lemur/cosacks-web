import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import RamblerCalendar from 'rambler-ui/Calendar';

const StyledCalendar = styled(RamblerCalendar)``;

class Calendar extends React.PureComponent {
  static propTypes = {
    visibleMonths: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    variation: PropTypes.oneOf(['service', 'media']),
    value: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.arrayOf(Date)
    ]),
    initDate: PropTypes.instanceOf(Date),
    today: PropTypes.instanceOf(Date),
    range: PropTypes.bool,
    minYear: PropTypes.number,
    maxYear: PropTypes.number,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    showYear: PropTypes.bool,
    showMonthSwitch: PropTypes.bool,
    highlightWeekend: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    visibleMonths: 1,
    className: '',
    variation: 'service',
    range: false,
    minYear: 1900,
    maxYear: 2200,
    showYear: true,
    showMonthSwitch: true,
    highlightWeekend: false,
    onChange: () => null
  };

  render() {
    const {...rest} = this.props;

    return (
      <Flex>
        <StyledCalendar {...rest} />
      </Flex>
    );
  }
}

export default styled(Calendar)``;
