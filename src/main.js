// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

//这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）
// 引入vue-resource网络请求模块
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueMaterial)

// 使用material主题
Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red',
    background: 'white'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',     //这里绑定的是index.html中的id为app的div元素
    router,
    components : {
        App
    },
    template : '<App/>'
})
