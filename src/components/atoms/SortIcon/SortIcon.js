import React from 'react';
import { Sort } from 'icons';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 8px;
  height: 11px;
  display: inline-block;

  ${Sort} {
    path {
      fill: #d5ebf4;
    }

    ${p =>
      p.sort === 'desc' &&
      css`
        path:nth-child(1) {
          fill: #5ab2d6;
        }
      `}

    ${p =>
      p.sort === 'asc' &&
      css`
        path:nth-child(2) {
          fill: #5ab2d6;
        }
      `}
  }
`;

class SortIcon extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    sort: PropTypes.oneOf(['asc', 'desc'])
  };

  static defaultProps = {
    className: '',
    sort: null
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Sort />
      </Wrapper>
    );
  }
}

export default styled(SortIcon)``;
