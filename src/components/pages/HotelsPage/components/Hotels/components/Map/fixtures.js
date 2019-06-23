import component from './';
import sidebarFixture from './components/SideBar/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      sanatories: sidebarFixture[0].props.sanatories
    }
  }
];
