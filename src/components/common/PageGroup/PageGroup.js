import React from 'react';
import {Route, Switch} from 'react-router';

import {UserCreatePage, UserEditPage, UserListPage, UserPage} from '.';
import PropTypes from 'prop-types';

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
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        exact: PropTypes.bool,
        path: PropTypes.string,
        component: PropTypes.func
      })
    ),
  };

  static defaultProps = {
    routes
  };

  render() {
    const {routes} = this.props;

    return (
      <Switch>
        {routes.map((route, key) => (
        <Route key={key} {...route}/>
        ))}
      </Switch>
  }
}

export default UsersPages;
