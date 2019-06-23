import Qs from 'qs';
import { authStoreOld as authStore } from 'stores';
import superagent_ from 'superagent';
import superagentPromise from 'superagent-promise';

const API_ROOT = `http://82.202.198.194/api`;

const { get, post, put, del } = superagentPromise(superagent_, global.Promise);

const serialize = params => Qs.stringify(params, { arrayFormat: 'brackets' });

const tokenPlugin = req => {
  if (authStore.token) {
    req.set('authorization', `Bearer ${authStore.token}`);
  }
};

const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    authStore.logout();
  }

  return err;
};

const responseBody = res => {
  const authorization = res.headers.authorization;
  const token = authorization ? authorization.split(' ')[1] : null;

  if (token) {
    res.body.token = token;
  }

  return res.body;
};

const request = (fn, url, body = null) => {
  return fn(`${API_ROOT}${url}`, body)
    .use(tokenPlugin)
    .end(handleErrors)
    .then(responseBody);
};

const Api = {
  get: (url, data) => request(get, url, serialize(data)),
  post: (url, data) => request(post, url, data),
  put: (url, data) => request(put, url, data),
  del: (url, data) => request(del, url, serialize(data))
};

export default Api;
