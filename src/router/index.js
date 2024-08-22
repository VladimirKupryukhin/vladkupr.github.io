import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TrickFireCodebase from '../components/trickfirecodebase.vue'
import CustomI2C from '../components/customI2C.vue'
import MotherboardPCB from '../components/motherBoardPcb.vue'
import SunSolarPanelTracker from '../components/sunSolarPanelTracker.vue'
import UWDubhacks2024 from '../components/uwDubhacks2024.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,

      children: [
        {
          path: 'trickfire_codebase',
          name: 'trickfire_codebase',
          component: TrickFireCodebase
        },
        {
          path: 'custom_i2c',
          name: 'custom_i2c',
          component: CustomI2C
        },
        {
          path: 'motherboard_pcb',
          name: 'motherboard_pcb',
          component: MotherboardPCB
        },
        {
          path: 'sun_solar_tracker',
          name: 'sun_solar_tracker',
          component: SunSolarPanelTracker
        },
        {
          path: 'uw_dubhacks_2024',
          name: 'uw_dubhacks_2024',
          component: UWDubhacks2024
        }
      ]
    }

  ]
})

export default router
