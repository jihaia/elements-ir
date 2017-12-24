import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import OfficeUIFabricVue from 'office-ui-fabric-vue'

import 'office-ui-fabric-vue/dist/index.css'
import 'office-ui-fabric-core/dist/css/fabric.min.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(OfficeUIFabricVue)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
