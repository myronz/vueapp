import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeList from '../components/HomeList'
import HomeDetail from '../components/HomeDetail'
import User from '../components/User'
import About from '../components/About'

Vue.use(VueRouter)

// 创建路由实例并配置路由映射
// 在router/index.js文件中创建路由并配置路由映射 ，并通过export输出router到main.js文件中
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeList
        },
        {
            path: '/homelist',
            name: 'homelist',
            component: HomeList
        },
        {
            path: '/homedetail',
            name: 'homedetail',
            component: HomeDetail
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
})
