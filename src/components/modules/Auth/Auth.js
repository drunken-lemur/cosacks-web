import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import {SignInPage} from 'pages';

@withRouter
@observer
class Auth extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/auth/signin" component={SignInPage}/>
      </Switch>
    );
  }
}

export default Auth;
