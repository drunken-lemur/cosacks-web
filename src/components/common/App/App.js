import React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {LoginPage, NotFoundPage} from 'pages';
import {Auth, Events, Users} from 'pages';

import {PageGroup, MainProvider} from 'components/common';

const routes = [{
  path: '/login',
  component: LoginPage
}, {
  path: '/auth',
  component: Auth
}, {
  path: '/users',
  isPrivate: true,
  component: Users
}, {
  path: '/events',
  isPrivate: true,
  component: Events
}, {
  path: '*',
  component: NotFoundPage
}];

@observer
class App extends React.Component {
  render() {
    return (
      <MainProvider>
        <PageGroup routes={routes} />

        {process.env.NODE_ENV === 'development' && (
          <DevTools position={{bottom: 5, right: 20}}/>
        )}
      </MainProvider>
    );
  }
}

export default App;
