import component from './';

import fixtures from './components/FavoriteHotels/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      hotels: fixtures[0].props.hotels
    }
  }
];
