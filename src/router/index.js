import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../components/MenuPage/Menu.vue'
import Login from '../components/RegistrationPage/Login.vue'
import Register from '../components/RegistrationPage/Register.vue'
import Password from '../components/RegistrationPage/Password.vue'
import ProblemFoods from '../components/ProblemFoods/ProblemFoods.vue'
import Progress from '../components/NotFoundPage.vue'
import Admin from '../components/ADMIN/AdminApp.vue'
import NotFoundPageVue from '../components/NotFoundPage.vue'
import orderactive from '../components/OrderActive/OrderActive.vue'
import prices from '../components/PricingPage/Pricing.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/password',
      name: 'password',
      component: Password
    },
    {
      path: '/problemfoods',
      name: 'ProblemFoods',
      component: ProblemFoods
    },
    {
      path: '/in-progress',
      name: 'in-progress',
      component: Progress
    },
    {
      path: '/MyAdmin',
      name: 'MyAdmin',
      component: Admin
    },
    {
      path: '/new',
      name: 'NewFood',
      component: NotFoundPageVue
    },
    {
      path: '/orderactive',
      name: 'orderactive',
      component: orderactive
    },
    {
      path: '/prices',
      name: 'prices',
      component: prices
    }
  ]
});

export default router  