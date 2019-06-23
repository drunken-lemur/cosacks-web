import React from 'react';
import { reaction } from 'mobx';
import PropTypes from 'prop-types';
import { Field, Input } from 'forms';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div``;

@observer
class Age extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    field: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  componentDidMount() {
    const { field } = this.props;

    reaction(
      () => field.$('age').value,
      age => {
        field.set({
          age_group: age >= 18 ? 'adult' : 'child'
        });
      }
    );
  }

  render() {
    const { field, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Field min="0" max="120" component={Input} field={field.$('age')} />
      </Wrapper>
    );
  }
}

export default styled(Age)``;
