import React from 'react';
import { BackLink } from 'atoms';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { display } from 'theme/mixins';
import { Input, Field, Form, Select, DatePicker } from 'forms';
import { Location, Document, Calendar, CircleArrow } from 'icons';

import FormState from './Form';

const DescIcon = styled(CircleArrow)`
  margin-right: 10px;
`;

const AscIcon = styled(DescIcon)`
  transform: rotate(180deg);
`;

const sortItems = [
  {
    label: 'Цена по возрастанию',
    value: 'asc',
    icon: <AscIcon />
  },
  {
    label: 'Цена по убыванию',
    value: 'desc',
    icon: <DescIcon />
  }
];

const Wrapper = styled.div`
  height: 72px;
  padding-left: 20px;
  ${display('flex', 'center', 'flex-start')};

  ${Input}{ 
    background: #fff;
  }

  ${Field} + ${Field} {
      margin-left: 8px;
  }
`;

const InputsWrapper = styled.div`
  margin-left: 70px;
  ${display('flex', 'center', 'flex-start')};
`;

@observer
class FilterBar extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    this.form = new FormState();
  }

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <BackLink />

        <Form form={this.form}>
          <InputsWrapper>
            <Field
              name="location"
              iconLeft={<Location />}
              component={Input}
              placeholder="Сочи, Краснодарский край"
              defaultValue="Сочи, Краснодарский край"
            />

            <Field
              range
              name="date"
              visibleMonths={2}
              defaultValue={[]}
              component={DatePicker}
              iconLeft={<Calendar />}
              placeholder="16 декабря, 2019 – 23 декабря, 2019"
            />

            <Field
              name="contract"
              iconLeft={<Document />}
              component={Input}
              placeholder="Договор LN12001"
              defaultValue="Договор LN12001"
            />

            <Field
              name="sort"
              items={sortItems}
              component={Select}
              defaultValue={sortItems[0]}
            />

            <button type="submit">Ok</button>
          </InputsWrapper>
        </Form>
      </Wrapper>
    );
  }
}

export default styled(FilterBar)``;
