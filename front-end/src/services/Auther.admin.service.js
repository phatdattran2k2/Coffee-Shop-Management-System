import Api from './admin.service';

export default {
  login(credentials) {
    return Api.post('/', credentials);
  }
};
