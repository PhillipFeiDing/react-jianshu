import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
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

    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Get App</NavItem>
                    <NavItem className='right'>Log In</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='compose'><i className="iconfont">&#xe6e5;</i>&nbsp;Compose</Button>
                    <Button className='sign-up'>Sign Up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const { focused, list } = this.props
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoArrow />
                    <SearchInfoTitle>
                        Top Search
                        <SearchInfoSwitch>
                            <i className='iconfont' style={{position: 'absolute', left: '-25px', top: '-5px'}}>&#xe6ad;</i>
                            See More
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                )
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']), // state.get('header').get('focused')
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)