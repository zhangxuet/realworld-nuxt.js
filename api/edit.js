import { request } from '@/plugins/request'

export const createArticle = data => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data
    })
}

export const updateArticle = slug => {
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`
    })
}

export const deleteArticle = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`
    })
}