import main from './components/post/main.vue'
import addPost from './components/post/addPost.vue'
import singlePost from './components/post/singlePost.vue'
import editPost from './components/post/editPost.vue'

export default [
    { path: '/', component: main},
    { path: '/:id', component: main},
    { path: '/add', component: addPost},
    { path: '/post/:id', component: singlePost},
    { path: '/edit/:id', component: editPost}
]
