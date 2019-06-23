import component from './';

import avatarMock from 'atoms/Avatar/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      avatar: avatarMock[0].props.src,
      name: 'Имя пользователя'
    }
  },
  {
    component,
    name: 'example administrator',
    props: {
      avatar: avatarMock[1].props.src,
      name: 'Administrator'
    }
  }
];
