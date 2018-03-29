import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';// 引用
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';
// Vue.use(VueRouter);

// let app = Vue.extend(App);

// let router = new VueRouter();

// router.map({
//   '/goods': {
//     component: goods
//   },
//   '/ratings': {
//     component: ratings
//   },
//   '/seller': {
//     component: seller
//   }
// });

// router.start(app, '#app');
// 安装 "VueRouter"这个插件
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);// 全局注册
let routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/goods', component: goods}, {path: '/ratings', component: ratings}, {path: '/seller', component: seller}]}
];
let router = new VueRouter({
  'linkActiveClass': 'active',
   routes // （缩写）相当于 routes: routes
});
// let app = new Vue({
//   router
// }).$mount('#app');
// router.push('/goods');
// export default app;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
});