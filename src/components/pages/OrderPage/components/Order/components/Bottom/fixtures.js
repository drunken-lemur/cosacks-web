import component from './Bottom';

import descriptionMock from './components/Description/fixtures';
import orderAndChatMock from './components/OrderAndChat/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      description: descriptionMock[0].props,
      orderAndChat: orderAndChatMock[1].props
    }
  },
  {
    component,
    name: 'example 2',
    props: {
      description: descriptionMock[0].props,
      orderAndChat: orderAndChatMock[1].props
    }
  }
];
