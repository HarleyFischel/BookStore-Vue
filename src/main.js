
import Vue from 'vue'
import { 
    BootstrapVue, 
    FormTextareaPlugin, 
    LayoutPlugin, 
    IconsPlugin 
} from 'bootstrap-vue'
import VueFormGenerator from 'vue-form-generator'
import App from './App'
import router from './router'

Vue.use(VueFormGenerator)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(IconsPlugin)
Vue.use(FormTextareaPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>'
})
