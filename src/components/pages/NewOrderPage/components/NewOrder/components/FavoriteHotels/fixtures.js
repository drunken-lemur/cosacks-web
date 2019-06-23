import component from './';
import hotelCardFixtures from 'molecules/HotelCard/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      hotels: [
        hotelCardFixtures[1].props,
        hotelCardFixtures[0].props,
        hotelCardFixtures[0].props,
        hotelCardFixtures[0].props
      ]
    }
  }
];
