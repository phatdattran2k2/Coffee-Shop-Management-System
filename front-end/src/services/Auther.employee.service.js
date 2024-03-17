import Api from './employee.service';

export default {
  getEmployees() {
    return Api.get('/');
  },
  updateEmployees(id, updateForm) {
    return Api.put(`/${id}`, updateForm);
  },
  addEmployees(addForm) {
    return Api.post('/', addForm);
  },
  deleteEmployees(id) {
    return Api.delete(`/${id}`);
  },
  getQuantity() {
    return Api.get('/quantity_employees');
  }
};
