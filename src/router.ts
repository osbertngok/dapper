import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Layout from './views/Layout.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Home,
        meta: {
            requireLogin: true,
        },
        children: [{
            path: '/layout',
            name: 'layout',
            component: Layout,
        }],
    }],
});
