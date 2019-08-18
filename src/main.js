import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"

// 导入全局css样式
import "./assets/global.css"

Vue.config.productionTip = false

// 导入axios
import axios from "axios"
// 设置请求根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
    // 挂载到Vue的原型对象上
Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");