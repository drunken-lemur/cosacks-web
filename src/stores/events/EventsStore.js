import {Events} from 'services';
import {Event} from 'stores/models';
import {createApiStore} from '../utils';

const EventsStore = createApiStore(Event, Events);

export default EventsStore;
