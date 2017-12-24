import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cleanseAndStandardize',
      name: 'cleanseAndStandardize',
      component: require('@/components/cleanseAndStandardize').default
    },
    {
      path: '/cleanseMatch',
      name: 'cleanseMatch',
      component: require('@/components/Navigator').default
    },
    {
      path: '/extendedMatch',
      name: 'extendedMatch',
      component: require('@/components/Navigator').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings').default
    },
    {
      path: '/',
      name: 'navigator',
      component: require('@/components/Navigator').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
