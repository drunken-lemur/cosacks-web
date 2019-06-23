import React from 'react';
import { reaction } from 'mobx';
import PropTypes from 'prop-types';
import { Field, Input } from 'forms';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div``;

@observer
class FullName extends React.Component {
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
      () => field.$('full_name').value,
      fullName => {
        const [last_name, first_name, middle_name] = `${fullName}`
          .split(' ')
          .map(v => v.trim());

        field.set({
          last_name,
          first_name,
          middle_name
        });
      }
    );
  }

  render() {
    const { field, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Field field={field.$('full_name')} component={Input} />
      </Wrapper>
    );
  }
}

export default styled(FullName)``;
