import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoArrow,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends Component {

    getListArea() {
        const {
            focused,
            list,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props

        const jsList = list.toJS()
        const pageList = []
        if (jsList.length) {
            for (let i = page * 10; i < Math.min(jsList.length, (page + 1) * 10); i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoArrow />
                    <SearchInfoTitle>
                        Top Search
                        <SearchInfoSwitch
                            onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe6ad;</i>
                            See More
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        return null
    }

    render() {
        const { focused, list, login, handleInputFocus, handleInputBlur, logout } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Get App</NavItem>
                    {
                        login ?
                            <NavItem className='right button' onClick={logout}>Log Out</NavItem>
                            :
                            <Link to='login'><NavItem className='right button'>Log In</NavItem></Link>
                    }
                    <NavItem className='right'><i className='iconfont'>&#xe723;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='compose'><i className='iconfont feather'>&#xe6e5;</i>Compose</Button>
                    </Link>
                    <Button className='sign-up'>Sign Up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']), // state.get('header').get('focused')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: (list) => {
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage: (page, totalPage, spin) => {
            const currAngle = (spin.style.transform || '0').replace(/[^0-9]/ig, '')
            spin.style.transform = `rotate(${parseInt(currAngle) + 360}deg)`
            dispatch(actionCreators.changePage((page + 1) % totalPage))
        },
        logout: () => {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)