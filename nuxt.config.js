module.exports = {
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            // 清除nuxt基于pages目录默认生成的路由表规则
            routes.splice(0)
            routes.push(...[{
                path: '/',
                component: resolve(__dirname, 'pages/layout/'),
                children: [{
                        path: '',
                        name: 'home',
                        component: resolve(__dirname, 'pages/home/')
                    },
                    {
                        path: '/login',
                        name: 'login',
                        component: resolve(__dirname, 'pages/login/')
                    },
                    {
                        path: '/register',
                        name: 'register',
                        component: resolve(__dirname, 'pages/login/')
                    },
                    {
                        path: '/profile/:username',
                        name: 'profile',
                        component: resolve(__dirname, 'pages/profile/')
                    },
                    {
                        path: '/settings',
                        name: 'settings',
                        component: resolve(__dirname, 'pages/settings/')
                    },
                    {
                        path: '/edit',
                        name: 'edit',
                        component: resolve(__dirname, 'pages/edit/')
                    },
                    {
                        path: '/article/:slug',
                        name: 'article',
                        component: resolve(__dirname, 'pages/article/')
                    },
                ]
            }])
        }
    },

    server: {
        host: '0.0.0.0',
        port: 3000
    },

    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}