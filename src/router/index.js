import Vue from 'vue';
import Router from 'vue-router';
import apptitle from '@/components/apptitle';
import todolist from '@/components/todolist';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'apptitle',
        components: {
            default: apptitle,
            apptitle: apptitle,
            todolist: todolist
        }
    }]
});