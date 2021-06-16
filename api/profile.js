import { request } from '@/plugins/request'

export const getProfile = username => {
    return request({
        method: 'GET',
        url: `/api/profiles/${username}`
    })
}

export const addFollow = username => {
    return request({
        method: 'POST',
        url: `/api/profiles/${username}/follow`
    })
}

export const deleteFollow = username => {
    return request({
        method: 'DELETE',
        url: `/api/profiles/${username}/follow`
    })
}