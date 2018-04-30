import main from './components/post/main.vue'
import addPost from './components/post/addPost.vue'
import singlePost from './components/post/singlePost.vue'
import editPost from './components/post/editPost.vue'
import login from './components/login/login.vue'
import register from './components/login/register.vue'

export default [
    { path: '/', redirect: '/main/1'},
    { path: '/main', redirect: '/main/1'},
    { path: '/main/:pagenum', component: main},
    { path: '/post/add', component: addPost},
    { path: '/post/:id', component: singlePost},
    { path: '/edit/:id', component: editPost},
    { path: '/login', component: login},
    { path: '/register', component: register}
]