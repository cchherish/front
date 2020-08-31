import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
router.beforeEach((to,from,next) => {
    console.log("to",to.path)
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')