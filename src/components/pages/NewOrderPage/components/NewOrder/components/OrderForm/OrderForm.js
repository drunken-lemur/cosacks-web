import React from 'react';
import { computed } from 'mobx';
import { Success } from 'icons';
import PropTypes from 'prop-types';
import { Form, Button } from 'forms';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { typography, display } from 'theme/mixins';

import {
  Travellers,
  NameField,
  DatesField,
  AddressField,
  ContractField
} from './components';

const Wrapper = styled.div`
  width: 960px;
  display: flex;
  border-radius: 6px;
  box-sizing: border-box;
  flex-direction: column;
  border: 2px solid #9cb4ca;
  padding: 16px 24px 24px 24px;
  background: rgba(156, 180, 202, 0.2);

  ${Button} {
    width: 134px;
    margin-left: 8px;
  }

  ${Travellers} {
    margin: 28px 0;
  }

  ${NameField} {
    width: 586px;
  }

  ${DatesField} {
    width: 318px;
  }

  ${AddressField} {
    width: 586px;
  }

  ${ContractField} {
    width: 176px;
  }

  &&& {
    ${NameField},
    ${DatesField},
    ${AddressField},
    ${ContractField} {
      margin-left: 8px;

      input,
      input:focus {
        background: #fff;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const Title = styled.div`
  color: #9cb4ca;
  ${typography(40, 48, 700)};
`;

const FormRow = styled.div`
  ${display('flex', 'center', 'space-between')};

  margin-top: 16px;

  & + & {
    margin-top: 8px;
  }
`;

const Notice = styled.div`
  height: 100%;
  color: #9cb4ca;
  ${typography(14, 18, 700)};
  ${display('flex', 'flex-end', 'center')};

  svg {
    margin-right: 8px;
  }
`;

@inject('searchState', 'orderStore')
@observer
class OrderForm extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  @computed get isLoading() {
    const { orderStore } = this.props;
    return orderStore.isPending;
  }

  render() {
    const { searchState, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Title>Новый заказ</Title>

        <Form form={searchState}>
          <FormRow>
            <NameField field={searchState.$('hotel')} />

            <DatesField
              checkIn={searchState.$('check_in')}
              checkOut={searchState.$('check_out')}
            />
          </FormRow>

          <FormRow>
            <AddressField field={searchState.$('address')} />

            <ContractField field={searchState.$('contract')} />

            <Button loading={this.isLoading} type="submit">
              Найти
            </Button>
          </FormRow>

          <Travellers travellers={searchState.$('travellers')} />
        </Form>

        {!!0 && (
          <Notice>
            <Success />
            Срок действия договора: с 12 декабря 2018 по 13 февраля 2021
          </Notice>
        )}
      </Wrapper>
    );
  }
}

export default styled(OrderForm)``;
