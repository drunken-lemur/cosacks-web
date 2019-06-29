import React from 'react';
import {observer} from 'mobx-react';
import {Redirect} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import {Auth, Events, NotFoundPage, Users} from 'pages';

import {MainProvider, PageGroup} from 'components/common';

const routes = [{
  path: '/',
  exact: true,
  component: () => <Redirect exact from='/' to='/users'/>
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
        <PageGroup routes={routes}/>

        {process.env.NODE_ENV === 'development' && (
          <DevTools position={{bottom: 5, right: 20}}/>
        )}
      </MainProvider>
    );
  }
}

export default App;
