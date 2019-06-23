import React from 'react';
import { Pen } from 'icons';
import { Input } from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DoubleTitle } from 'molecules';

const Wrapper = styled.div``;

const StyledInput = styled(Input)`
  &,
  input {
    height: 35px !important;
  }

  width: 131px !important;
`;

class Insurance extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    insuranceNumber: PropTypes.string
  };

  static defaultProps = {
    className: '',
    insuranceNumber: ''
  };

  render() {
    const { insuranceNumber, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <DoubleTitle
          title="Договор страхования"
          subTitle="действующий для этого номера"
        >
          <StyledInput iconRight={<Pen />} value={insuranceNumber} />
        </DoubleTitle>
      </Wrapper>
    );
  }
}

export default styled(Insurance)``;
