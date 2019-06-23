import React from 'react';
import { Errors } from 'atoms';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Label = styled.label`
  user-select: none;
`;

const input = styled.input``;

@observer
class Field extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    name: PropTypes.string
  };

  static defaultProps = {
    className: '',
    component: input
  };

  render() {
    const { className, field, component, ...rest } = this.props;
    if (!field) return null;

    const Component = component;

    return (
      <Wrapper className={className}>
        {!!field.label && <Label htmlFor={field.id}>{field.label}</Label>}

        <Component {...rest} field={field} />

        <Errors error={field.error} />
      </Wrapper>
    );
  }
}

export default styled(Field)``;
