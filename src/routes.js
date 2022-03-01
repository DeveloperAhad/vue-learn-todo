import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue'
import About from './components/About.vue'

const history = createWebHistory();
const routes = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/*',
            name: 'error-page',
            component: {template: '<h1>404</h1>'}
        }
        
    ]
});

export default routes