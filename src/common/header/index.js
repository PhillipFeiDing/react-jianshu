import React from 'react'
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
    Addition,
    Button
} from './style'

const Header = (props) => (
    <HeaderWrapper>
        <Logo />
        <Nav>
            <NavItem className='left active'>Home</NavItem>
            <NavItem className='left'>Get App</NavItem>
            <NavItem className='right'>Log In</NavItem>
            <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                    <NavSearch
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                    ></NavSearch>
                </CSSTransition>
                <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='compose'><i className="iconfont">&#xe6e5;</i>&nbsp;Compose</Button>
            <Button className='sign-up'>Sign Up</Button>
        </Addition>
    </HeaderWrapper>
)

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']) // state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)