import config from 'config';
import io from 'socket.io-client';
import feathers from '@feathersjs/client';

console.log('config.apiUrl', config.apiUrl);

const socket = io(config.apiUrl);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication({
  storage: window.localStorage
}));

export default client;
