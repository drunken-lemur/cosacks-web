import component from './Sidebar';

import sanatoryMock from './components/Hotel/fixtures';
import tariffSelectorMock from './components/TariffSelector/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      sanatory: sanatoryMock[0].props,
      rooms: tariffSelectorMock[0].props
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      sanatory: sanatoryMock[1].props,
      rooms: tariffSelectorMock[1].props
    }
  }
];
