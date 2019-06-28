import React from 'react';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import styled from 'styled-components';

import {UsersStore} from 'stores/users';

import {UserRow} from './components';

const Wrapper = styled.div``;

@observer
class UserList extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    this.usersStore = UsersStore.create();
  }

  componentDidMount() {
    this.usersStore.find();
  }

  render() {
    const {usersStore} = this;
    const {...rest} = this.props;

    return (
      <Wrapper {...rest}>
        <div>UserList</div>

        <Loader loading={usersStore.isPending}>
          {usersStore.list.map(user => (
            <UserRow key={user.id} {...user}/>
          ))}
        </Loader>
      </Wrapper>
    );
  }
}

export default styled(UserList)``;
