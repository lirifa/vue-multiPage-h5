import Vue from 'vue';
import Tpl from './index.vue';
// import '@styles/lib/main.scss';
import store from '../../store';
// import { Toast } from 'mint-ui'
// Vue.component(Toast.name, Toast)

new Vue({
  store,
  render: h => h(Tpl),
}).$mount('#app');
