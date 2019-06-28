import {Users} from 'services';
import {User} from 'stores/models';
import {createApiStore} from '../utils';

const UsersStore = createApiStore(User, Users);

export default UsersStore;
