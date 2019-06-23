import React from 'react';
import { Input } from 'forms';
import PropTypes from 'prop-types';
import { Pen, CornerDown } from 'icons';
import { formatPrice } from 'utils';
import styled from 'styled-components';
import { display, typography } from 'theme/mixins';

const Wrapper = styled.div`
  ${display('flex', 'center', 'space-between')};

  ${CornerDown} {
    path {
      fill: #4a515c;
      stroke: #979797;
    }

    vertical-align: middle;
  }
`;

const Number = styled.div`
  color: #4a515c;
  ${typography(13, 16, 700)};
`;

const StyledInput = styled(Input)`
  background: #fff !important;

  &,
  input {
    height: 35px !important;
  }
`;

const AllocationInput = styled(StyledInput)`
  width: 280px;
`;

const ContractNumberInput = styled(StyledInput)`
  width: 130px;
`;

const PaymentInput = styled(StyledInput)`
  width: 350px;
`;

const PriceWrapper = styled.div``;

const PriceInsurance = styled.div`
  color: #5ab2d6;
  ${typography(12, 15, 700)};
`;

const PriceCash = styled(PriceInsurance)`
  color: #e68686;
`;

class Slot extends React.PureComponent {
  static propTypes = {
    number: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    number: 1,
    className: ''
  };

  render() {
    const { number, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {!!number && <Number>{number}.</Number>}

        <AllocationInput
          value="взрослый на основном месте"
          iconRight={<CornerDown />}
        />

        <ContractNumberInput value="17 LM 0004" iconRight={<Pen />} />

        <PaymentInput
          value="Страховая – 7 ночей ・ Наличные – 0 ночей"
          iconRight={<Pen />}
        />

        <PriceWrapper>
          <PriceInsurance>{formatPrice(3000)}</PriceInsurance>

          <PriceCash>{formatPrice(4000)}</PriceCash>
        </PriceWrapper>
      </Wrapper>
    );
  }
}

export default styled(Slot)``;
