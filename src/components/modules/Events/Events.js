import React from 'react';
import {observer} from 'mobx-react';
import {Route, Switch, withRouter} from 'react-router-dom';

import {EventCreatePage, EventEditPage, EventPage, EventsListPage, EventSubscribePage} from 'pages';

@withRouter
@observer
class Orders extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/events" component={EventsListPage}/>

        <Route exact path="/events/create" component={EventCreatePage}/>

        <Route exact path="/events/:id" component={EventPage}/>

        <Route exact path="/events/:id/edit" component={EventEditPage}/>

        <Route exact path="/events/:id/subscribe" component={EventSubscribePage}/>
      </Switch>
    );
  }
}

export default Orders;
