import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import $ from 'jquery'
import './assets/js/libs/rem.js'
import router from './router/index'
// 普通icon使用
import "assets/fonts/iconfont.css";
// 框架icon组件自定义图标使用
import "assets/fonts/icon-font.css";

// import { Submodule } from 'Submodule'

Vue.config.productionTip = false
import { Form } from 'vant'

Vue.use(VueRouter)
Vue.use(Vuex)


// Vue.use(Submodule)

Vue.prototype.$ = $

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
