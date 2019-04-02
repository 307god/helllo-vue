import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
