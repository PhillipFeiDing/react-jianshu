import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1,
    hasMoreArticle: true,
    recommendList: [],
    writerList: [],
    writerPage: 0,
    writerTotalPage: 1,
    showScroll: false
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_PAGE:
            return state.set('writerPage', action.page)
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.data.topicList),
                articleList: fromJS(action.data.articleList),
                articlePage: fromJS(1),
                hasMoreArticle: fromJS(true),
                recommendList: fromJS(action.data.recommendList),
                writerList: fromJS(action.data.writerList),
                writerTotalPage: fromJS(action.data.writerTotalPage)
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        case constants.NO_MORE_ARTICLE:
            return state.set('hasMoreArticle', false)
        default:
            return state
    }
}