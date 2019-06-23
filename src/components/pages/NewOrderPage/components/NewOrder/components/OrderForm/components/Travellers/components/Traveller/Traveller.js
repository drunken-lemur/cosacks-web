import React from 'react';
import { Delete } from 'icons';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { display } from 'theme/mixins';
import { Field, Input, SelectX } from 'forms';

import { Age, FullName } from './components';

const Wrapper = styled.div`
  width: 609px;

  ${display('flex', 'center', 'space-between')};

  ${Field} {
    margin: 0 0 0 10px;
  }

  ${FullName} {
    flex-grow: 1;
    ${Input} {
      margin: 0;

      width: 100%;
    }
  }

  ${Input} {
    width: 120px;
    background: #fff;

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }

  &&& ${SelectX} {
    max-width: 120px;
    height: 42px;
  }

  ${Delete} {
    cursor: pointer;
    margin-left: 10px;
  }
`;

@observer
class Traveller extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    traveller: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  onDelete = e => {
    const { traveller } = this.props;

    traveller.onDel(e);
  };

  render() {
    const { traveller, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <FullName field={traveller} />

        <Field
          component={SelectX}
          field={traveller.$('gender')}
          items={traveller.$('gender').extra}
        />

        <Age field={traveller} />

        <Delete onClick={this.onDelete} />
      </Wrapper>
    );
  }
}

export default styled(Traveller)``;
