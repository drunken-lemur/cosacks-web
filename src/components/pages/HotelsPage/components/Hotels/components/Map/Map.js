import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';

import { SideBar } from './components';

const map = {
  options: {
    draggable: true,
    scaleControl: true,
    // scrollwheel: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  },
  bootstrapURLKeys: {
    key: ''
  },
  defaultCenter: {
    lat: 59.95,
    lng: 30.33
  },
  defaultZoom: 11
};

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  height: 100%;

  ${SideBar} {
    top: 0;
    left: 0;
    position: absolute;
  }
`;

class Map extends React.PureComponent {
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
    className: ''
  };

  render() {
    const { sanatories, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <GoogleMap {...map} />

        <SideBar sanatories={sanatories} />
      </Wrapper>
    );
  }
}

export default styled(Map)``;
