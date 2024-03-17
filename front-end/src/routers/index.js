import { createWebHistory, createRouter } from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Drink from '@/views/Drink.vue';
import Customer from '@/views/Customer.vue';
import Statistics from '@/views/Statistics.vue';
import Employee from '@/views/Employee.vue';

const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
  {
    path: '/home',
    component: Home,
    name: 'Home'
  },
  {
    path: '/drink',
    component: Drink,
    name: 'Drink'
  },
  {
    path: '/customer',
    component: Customer,
    name: 'Customer'
  },
  {
    path: '/statistics',
    component: Statistics,
    name: 'Statistics'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/employee',
    component: Employee,
    name: 'Employee'
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
