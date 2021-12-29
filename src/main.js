import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 注意样式文件需要单独引入
// 调用插件
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
