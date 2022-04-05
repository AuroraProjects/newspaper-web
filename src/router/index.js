import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../View/HomeView.vue';
import Posts from '../components/home/Post.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
