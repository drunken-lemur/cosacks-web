import React from 'react';
import {history} from 'utils';
import {reaction} from 'mobx';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import styled from 'styled-components';

import {UsersStore} from 'stores/users';
import UserFormState from 'stores/forms/users/UserForm';

import {UserForm} from '..';

const Wrapper = styled.div``;

@observer
class UserEdit extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  onSuccess = form => {
    const {usersStore} = this;
    const {match} = this.props;
    const {id} = match.params;

    const values = form.values();

    usersStore.update(id, values)
      .then(() => history.push(`/users`));
  };

  constructor(props) {
    super(props);

    const {onSuccess} = this;
    this.userForm = new UserFormState({onSuccess});

    this.usersStore = UsersStore.create();
  }

  componentDidMount() {
    const {match} = this.props;
    const {userForm, usersStore} = this;

    this.reactions = [
      reaction(
        () => usersStore.data,
        user => userForm.set('value', user.toJSON())
      )
    ];

    this.usersStore.get(match.params.id);
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const {...rest} = this.props;
    const {userForm, usersStore} = this;

    return (
      <Wrapper {...rest}>
        <div>UserEdit</div>

        <Loader loading={usersStore.isPending}>
          <UserForm form={userForm}/>
        </Loader>
      </Wrapper>
    );
  }
}

export default styled(UserEdit)``;
