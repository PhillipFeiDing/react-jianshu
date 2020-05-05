import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title: title,
    content: content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail-${id}.json`).then((res) => {
            const result = res.data.data
            dispatch(changeDetail(result.title, result.content))
        }).catch(() => {
            window.alert('Request Failed.')
        })
    }
}