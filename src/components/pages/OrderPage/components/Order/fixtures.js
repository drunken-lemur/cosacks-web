import component from './Order';

import sidebarMock from './components/Sidebar/fixtures';
import formMock from './components/Form/fixtures';
import bottomMock from './components/Bottom/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      top: {},
      sidebar: sidebarMock[0].props,
      form: formMock[0].props,
      bottom: bottomMock[0].props
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      top: {},
      sidebar: sidebarMock[1].props,
      form: formMock[0].props,
      bottom: bottomMock[1].props
    }
  }
];
