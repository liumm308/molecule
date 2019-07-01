// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import animate from 'animate.css'


import 'font-awesome/css/font-awesome.min.css' //使用图标
import './assets/Iconfont/iconfont.css'
require ('./assets/Iconfont/iconfont.js');

import axios from 'axios'
Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(iView);
Vue.use(animate);
Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
