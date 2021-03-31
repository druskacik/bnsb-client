import Vue from 'vue';
import VueRouter from 'vue-router';
import { Button, Input, Checkbox } from 'ant-design-vue';

import Home from '../views/Home.vue';

Vue.use(Button);
Vue.use(Input);
Vue.use(Checkbox);

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
