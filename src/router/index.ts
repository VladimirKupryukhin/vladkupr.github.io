import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectList.vue'),
      children: [
        {
          path: '/projects/craneaerospace',
          name: 'projects-creneaerospace',
          component: () => import('../views/projects/CraneAerospace.vue'),
        },
        {
          path: '/projects/tfrmotherboard',
          name: 'projects-tfrmotherboard',
          component: () => import('../views/projects/TrickFireMotherBoard.vue'),
        },
      ]
    },
    {
      path: '/profexp',
      name: 'profexp',
      component: () => import('../views/ProfessionalExperience.vue'),
      children: [
        {
          path: '/profexp/stryker',
          name: 'profexp-stryker',
          component: () => import('../views/professional_exp/Stryker.vue'),
        },
      ]
    },

    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
