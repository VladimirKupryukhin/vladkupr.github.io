import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../views/ProjectList.vue'),
          children: [
            {
              path: '/projects/craneaerospace',
              name: 'craneaerospace',
              component: () => import('../views/projects/CraneAerospace.vue'),
            },
            {
              path: '/projects/tfrmotherboard',
              name: 'trickfire-motherboard',
              component: () => import('../views/projects/TrickFireMotherBoard.vue'),
            },
          ]
        },
        {
          path: '/profexp',
          name: 'professional-experience',
          component: () => import('../views/ProfessionalExperience.vue'),
          children: [
            {
              path: '/profexp/stryker',
              name: 'stryker',
              component: () => import('../views/professional_exp/Stryker.vue'),
            },
          ]
        },
      ]
    },

  ],
})

export default router
