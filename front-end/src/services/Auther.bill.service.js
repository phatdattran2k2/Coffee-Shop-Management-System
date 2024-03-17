import Api from './bill.service';

export default {
  getBestSeller() {
    return Api.get('/bestseller');
  },
  getQuantity() {
    return Api.get('/doanhthu');
  }
};
