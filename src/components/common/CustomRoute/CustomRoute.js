import React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Redirect, withRouter } from 'react-router-dom';

@withRouter
@inject('authStore')
@observer
class CustomRoute extends React.Component {
  render() {
    const { isPrivate, authStore, ...rest } = this.props;

    if (isPrivate && !authStore.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: this.props.location
            }
          }}
        />
      );
    }

    return <Route {...rest} />;
  }
}

export default CustomRoute;