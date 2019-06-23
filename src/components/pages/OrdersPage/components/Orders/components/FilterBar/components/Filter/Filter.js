import React from 'react';
import { Close } from 'icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from 'theme/mixins';

const Wrapper = styled.div`
  height: 30px;
  border-radius: 5px;
  background: #eff2f5;
  align-items: center;
  display: inline-flex;
  ${typography(13, 15)};
  padding: 0 10px 0 13px;

  ${Close} {
    width: 11px;
    height: 11px;
    cursor: pointer;
    margin-left: 15px;
  }
`;

const Name = styled.span`
  color: #979ba0;
`;

const Value = styled.span`
  color: #6b707b;
  margin-left: 6px;
`;

class Filter extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClear: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onClear: () => null
  };

  render() {
    const { name, value, onClear, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Name>{name}:</Name>

        <Value>{value}</Value>

        <Close onClick={onClear} />
      </Wrapper>
    );
  }
}

export default styled(Filter)``;
