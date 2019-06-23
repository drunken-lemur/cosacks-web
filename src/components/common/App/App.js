import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Switch, Redirect } from 'react-router-dom';

import MainProvider from 'common/MainProvider';
import CustomRoute from 'common/CustomRoute';

import { LoginPage, NotFoundPage } from 'pages';
import { Orders } from "Modules";

const routes = [{
  path: '/login',
  component: LoginPage
}, {
  path: '/orders',
  isPrivate: true,
  component: Orders
}, {
  path: '*',
  component: NotFoundPage
}];

@observer
class App extends Component {
  render() {
    return (
      <MainProvider>
        <Switch>
          <Redirect
            exact
            from='/'
            to='/orders'
          />

          {routes.map((route, key) => (
            <CustomRoute key={key} {...route} />
          ))}
        </Switch>

        {process.env.NODE_ENV === 'development' && (
          <DevTools position={{ bottom: 5, right: 20 }} />
        )}
      </MainProvider>
    );
  }
}

export default App;
