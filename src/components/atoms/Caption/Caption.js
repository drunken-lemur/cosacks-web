import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {typography} from 'theme/mixins';

export const variants = {
  reserved: {
    color: '#76a6d3',
    background: '#dff0ff'
  },
  accepted: {
    color: '#977c3a',
    background: '#f8e2ae'
  },
  canceled: {
    color: '#6b707b',
    background: '#d6dee8'
  },
  accepted1c: {
    color: '#519370',
    background: '#cbf5df'
  },
  error: {
    color: '#e26161',
    background: '#ffe7e7'
  }
};

const variant = p => {
  const values = variants[p.variant] || null;

  return (
    !!values &&
    css`
      color: ${values.color};
      background: ${values.background};
    `
  );
};

const Wrapper = styled.div`
  ${variant};
  padding: 6px 12px;
  display: inline-block;
  border-radius: 13.5px;
  ${typography(13, 15)};
`;

class Caption extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(Object.keys(variants))
  };

  static defaultProps = {
    className: '',
    variant: Object.keys(variants)[0]
  };

  render() {
    const {children, ...rest} = this.props;

    return <Wrapper {...rest}>{children}</Wrapper>;
  }
}

export default styled(Caption)``;
