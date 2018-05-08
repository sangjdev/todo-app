import main from './components/post/main.vue'
import addPost from './components/post/addPost.vue'
import singlePost from './components/post/singlePost.vue'
import editPost from './components/post/editPost.vue'
import login from './components/login/login.vue'
import register from './components/login/register.vue'
import tmp from './components/main/main.vue'
import footer from './components/common/footer.vue'

import header from './components/common/header.vue'

export default [
    { path: '/', redirect: '/main/1' },
    { path: '/main', redirect: '/main/1' },
    {
        path: '/main/:pagenum', components: {
            'app-header': header,
            'app-content': main,
            'app-footer': footer
        }
        //추후에 children 더 알아보기
        // ,
        // children: [
        //     {
        //         path: '',
        //         component: main
        //     }
        // ]
    },
    {
        path: '/post/add',
        components: {
            'app-header': header,
            'app-content': addPost,
            'app-footer': footer
        }
    },
    {
        path: '/post/:id', components: {
            'app-header': header,
            'app-content': singlePost,
            'app-footer': footer
        }
    },
    {
        path: '/edit/:id', components: {
            'app-header': header,
            'app-content': editPost,
            'app-footer': footer
        }
    },
    {
        path: '/login', components: {
            'app-header': header,
            'app-content': login,
            'app-footer': footer
        }
    },
    {
        path: '/register', components: {
            'app-header': header,
            'app-content': register,
            'app-footer': footer
        }
    },
    {
        path: '/tmp', components: {
            // 'app-header': header,
            'app-content': tmp
            // 'app-footer': footer
        }
    }
]