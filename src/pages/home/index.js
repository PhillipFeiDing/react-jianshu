import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src='/index-image.png' alt='540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? (<BackTop onClick={this.handleScrollTop}><span className='icon'>&gt;</span></BackTop>) : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents(true)
    }

    componentWillUnmount() {
        this.bindEvents(false)
    }

    bindEvents(mount) {
        if (mount) {
            window.addEventListener('scroll', this.props.changeScrollTopShow)
        } else {
            window.removeEventListener('scroll', this.props.changeScrollTopShow)
        }
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData: () => {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow: () => {
       if (document.documentElement.scrollTop > 100) {
           dispatch(actionCreators.toggleTopShow(true))
       } else {
           dispatch(actionCreators.toggleTopShow(false))
       }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)