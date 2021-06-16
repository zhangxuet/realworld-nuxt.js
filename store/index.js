const cookieParser = process.server ? require('cookieparser') : undefined
    // 在服务端渲染期间运行都是同一个实例
    // 为了防止数据冲突，务必要把state定义一个函数，返回数据对象
export const state = () => {
    return {
        foo: 'bar',
        user: null,
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    // nuxtServerInit会在服务端渲染期间自动调用
    nuxtServerInit({ commit }, { req }) {
        let user = null
            // console.log(req.headers)
        if (req.headers.cookie) {
            const parsed = cookieParser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (e) {

            }
        }
        // console.log(user)
        commit('setUser', user)
    }
}