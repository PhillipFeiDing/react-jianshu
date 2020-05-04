import React , { Component, Fragment } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {

    render() {
        const { list } = this.props
        return (
            <Fragment>
                {
                    list.map((item) => (
                        <ListItem key={item.get('id')}>
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
                    ))
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps)(List)