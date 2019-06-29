import React from 'react';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import styled from 'styled-components';
import {withRouter} from 'react-router';

import {UsersStore} from 'stores/users';

import {UserCard} from './components';

const Wrapper = styled.div``;

@withRouter
@observer
class UserView extends React.Component {
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
    const {match} = this.props;

    this.usersStore.get(match.params.id);
  }

  render() {
    const {usersStore} = this;
    const {...rest} = this.props;

    return (
      <Wrapper {...rest}>
        <div>ViewUser</div>

        <Loader loading={usersStore.isPending}>
          <UserCard {...usersStore.data}/>
        </Loader>
      </Wrapper>
    );
  }
}

export default styled(UserView)``;
