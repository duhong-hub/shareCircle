import Vue from 'vue'

// import page from 'page'
// import routes from './routes'

//引入全局css,js
import "./assets/css/base.css";
import "./assets/js/pmsp.js";

import App from './App.vue'
import router from './router'

import axios from 'axios'


// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://39.107.249.187:8080'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	render: h => h(App),
})
// .$mount('#app')
