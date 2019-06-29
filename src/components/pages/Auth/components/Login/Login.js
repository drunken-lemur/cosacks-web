import React from 'react';
import {reaction} from 'mobx';
import {observer} from 'mobx-react';
import {AuthStore, MessagesStore, UsersStore} from 'stores';

import Chat from './chat';

@observer
class Application extends React.Component {
  login = () => {
    const {email, password} = this.state;

    return this.authStore.login({email, password});
  };

  signup = () => {
    const {email, password} = this.state;

    this.usersStore.create({email, password})
      .then(() => this.login());
  };

  onLogout = () => {
    this.authStore.logout();
  };

  fetchAll = () => {
    const {messagesStore, usersStore} = this;

    Promise.all([
      usersStore.find(),

      messagesStore.find({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      })
    ]);
  };

  constructor(props) {
    super(props);

    this.state = {};
    this.authStore = AuthStore.create();
    this.usersStore = UsersStore.create();
    this.messagesStore = MessagesStore.create();
  }

  updateField(name, ev) {
    this.setState({[name]: ev.target.value});
  }

  componentDidMount() {
    this.reactions = [
      reaction(
        () => this.authStore.user,
        user => {
          console.log('reaction', {user});
          user && this.fetchAll();
        }
      )
    ];
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }


  render() {
    const {authStore, usersStore, messagesStore} = this;

    if (authStore.isPending) {
      return (
        <main className="container text-center">
          <h1>Loading...</h1>
        </main>
      );
    } else if (authStore.isAuthenticated) {
      return (
        <div>
          <Chat onLogout={this.onLogout} messages={messagesStore.list.toJSON()} users={usersStore.list.toJSON()}/>
        </div>
      );
    }

    return <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 className="font-100">Log in or signup</h1>
          <p>{authStore.error && authStore.error.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            <fieldset>
              <input className="block" type="email" name="email" placeholder="email"
                     onChange={ev => this.updateField('email', ev)}/>
            </fieldset>

            <fieldset>
              <input className="block" type="password" name="password" placeholder="password"
                     onChange={ev => this.updateField('password', ev)}/>
            </fieldset>

            <button type="button" className="button button-primary block signup" onClick={() => this.login()}>
              Log in
            </button>

            <button type="button" className="button button-primary block signup" onClick={() => this.signup()}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </main>;
  }
}

export default Application;
