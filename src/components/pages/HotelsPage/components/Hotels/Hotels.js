import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FiltersBar, Map } from './components';

const Wrapper = styled.div`
  height: 100%;
`;

const StyledMap = styled(Map)`
  /* height: calc(100% - 144px); */
`;

class Hotels extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    sanatories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        rate: PropTypes.number,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
      })
    )
  };

  static defaultProps = {
    className: '',
    sanatories: []
  };

  render() {
    const { sanatories, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <FiltersBar />
        <StyledMap sanatories={sanatories} />
      </Wrapper>
    );
  }
}

export default styled(Hotels)``;
