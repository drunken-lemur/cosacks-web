import React from 'react';
import PropTypes from 'prop-types';
import { HotelCard } from 'molecules';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 460px;
  overflow-y: auto;
  max-height: 100%;
  box-sizing: border-box;
  padding: 38px 25px 38px 20px;
  background: rgba(255, 255, 255, 0.55);

  ${HotelCard} {
  width: 416px;
  height: 140px;
  }

  ${HotelCard} + ${HotelCard} {
    margin-top: 20px;
  }
`;

class SideBar extends React.PureComponent {
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

    return !sanatories.length ? null : (
      <Wrapper {...rest}>
        {sanatories.map((sanatory, key) => (
          <HotelCard key={key} {...sanatory} />
        ))}
      </Wrapper>
    );
  }
}

export default styled(SideBar)``;
