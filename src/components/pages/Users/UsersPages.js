import React from 'react';
import {Route, Switch} from 'react-router';

import {UserCreatePage, UserEditPage, UserListPage, UserPage} from '.';

const routes = [
  {
    exact: true,
    path: '/users/create',
    component: UserCreatePage
  },
  {
    exact: true,
    path: '/users/:id/edit',
    component: UserEditPage
  },
  {
    exact: true,
    path: '/users',
    component: UserListPage
  },
  {
    exact: true,
    path: '/users/:id',
    component: UserPage
  }
];

class UsersPages extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/events/create" component={EventCreatePage}/>

        <Route exact path="/events/:id/edit" component={EventEditPage}/>

        <Route exact path="/users/:id" component={UserPages}/>

        <Route exact path="/users" component={UserPages}/>

        <Route exact path="/events/:id/subscribe" component={EventSubscribePage}/>
      </Switch>
  }
}

export default UsersPages;
