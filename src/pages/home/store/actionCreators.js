import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page: page
})

const changeHomeData = (data) => {
    data.writerTotalPage = Math.ceil(data.writerList.length / 5)
    return {
        type: constants.CHANGE_HOME_DATA,
        data: data
    }
}

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage: nextPage
})

const noMoreArticle = () => ({
    type: constants.NO_MORE_ARTICLE
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList-page-' + page + '.json').then((res) => {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        }).catch(() => {
            dispatch(noMoreArticle())
        })
    }
}

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/homeData.json').then((res) => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})