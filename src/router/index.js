import Vue from 'vue'
import Router from 'vue-router'
import Body from '../components/body'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Body,
            // children: [
            //     {
            //         path: '',
            //         name: 'My Account',
            //         beforeEnter: requiresAuth,
            //         component: LandingPage
            //     },
            // ]
        }
    ]
})
