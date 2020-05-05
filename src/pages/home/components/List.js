import React , { PureComponent, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore, NoMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {

    render() {
        const { list, page, hasMoreArticle, getMoreList } = this.props
        return (
            <Fragment>
                {
                    list.map((item) => (
                        <Link key={item.get('id')} to={`/detail/${item.get('id')}`}>
                            <ListItem>
                                <img className='pic' src={item.get('imgUrl')} alt='120' />
                                <ListInfo>
                                    <h3 className='title' dangerouslySetInnerHTML={{__html: item.get('title')}}></h3>
                                    <p className='desc' dangerouslySetInnerHTML={{__html: item.get('desc')}}></p>
                                    <p className='footer'>
                                        <span>{item.get('author')}</span>
                                        <span><i className='iconfont'>&#xe7d0;</i>{item.get('comment')}</span>
                                        <span><i className='iconfont'>&#xe622;</i>{item.get('like')}</span>
                                        {
                                            item.get('money') ? (<span><i className='iconfont'>&#xe600;</i>{item.get('money')}</span>) : null
                                        }
                                    </p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                {
                    hasMoreArticle ?
                        (<LoadMore onClick={() => {getMoreList(page)}}>More Articles</LoadMore>)
                    :
                        (<NoMore>No More Articles</NoMore>)
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
    hasMoreArticle: state.getIn(['home', 'hasMoreArticle'])
})

const mapDispatchToState = (dispatch) => ({
    getMoreList: (page) => {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToState)(List)