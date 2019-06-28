import React from 'react';
import {history} from 'utils';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import styled from 'styled-components';

import {UsersStore} from 'stores/users';
import UserFormState from 'stores/forms/users/UserForm';

import {UserForm} from '..';

const Wrapper = styled.div``;

@observer
class UserCreate extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  onSuccess = form => {
    const {usersStore} = this;
    const values = form.values();

    usersStore.create(values)
      .then(() => history.push('/users'));
  };

  constructor(props) {
    super(props);

    const {onSuccess} = this;
    this.userForm = new UserFormState({onSuccess});

    this.usersStore = UsersStore.create();
  }

  render() {
    const {...rest} = this.props;
    const {userForm, usersStore} = this;

    return (
      <Wrapper {...rest}>
        <div>CreateUser</div>

        <Loader loading={usersStore.isPending}>
          <UserForm form={userForm}/>
        </Loader>
      </Wrapper>
    );
  }
}

export default styled(UserCreate)``;
