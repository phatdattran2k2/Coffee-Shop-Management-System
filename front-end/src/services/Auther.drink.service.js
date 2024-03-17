import Api from './drink.service';

export default {
  getDrinks() {
    return Api.get('/');
  },
  updateDrinks(id, updateForm) {
    return Api.put(`/${id}`, updateForm);
  },
  addDrinks(addForm) {
    return Api.post('/', addForm);
  },
  deleteDrinks(id, deleteForm) {
    return Api.delete(`/${id}`, deleteForm);
  },
  getQuantity() {
    return Api.get('/quantity_drinks');
  }
};
