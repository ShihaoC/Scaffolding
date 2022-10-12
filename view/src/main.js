import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';//引入elementui
import 'element-ui/lib/theme-chalk/index.css';//引入elementui
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.config.productionTip = false

Vue.use(ElementUI);//引入elementui
Vue.use(VueAxios,axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
