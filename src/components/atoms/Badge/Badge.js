import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  ${({theme: {badge}}) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1px 2px 0 2px;
    color: ${badge.text};
    font-size: ${badge.fontSize};
    font-weight: ${badge.fontWeight};
    line-height: ${badge.lineHeight};
    box-sizing: ${badge.boxSizing};
    height: ${badge.height};
    min-width: ${badge.minWidth};
    border: ${badge.border};
    border-radius: ${badge.borderRadius};
    background-color: ${badge.background};
  `};
`;

class Badge extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    count: 0,
    className: ''
  };

  render() {
    const {count, ...rest} = this.props;

    return <Wrapper {...rest}>{count}</Wrapper>;
  }
}

export default styled(Badge)``;
