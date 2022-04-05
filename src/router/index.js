import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../View/HomeView.vue';
import Posts from '../components/home/Post.vue';
import AdminView from '../View/AdminView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/post/:id',
    component: Posts,
  },
  {
    path: '/admin',
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
