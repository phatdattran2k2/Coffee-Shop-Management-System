import Api from './customer.service';

export default {
  getCustomers() {
    return Api.get('/');
  },
  getQuantity() {
    return Api.get('/quantity_cus');
  }
};
