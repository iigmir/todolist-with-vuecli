import Vue from 'vue';
import Router from 'vue-router';
import apptitle from '@/components/apptitle';
import intro from '@/components/intro';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'apptitle',
        component: apptitle
    },{
        path: '/',
        name: 'intro',
        component: intro
    }]
});