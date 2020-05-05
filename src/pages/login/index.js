import React , { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {

    render() {
        const { loginStatus } = this.props
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Username' ref={(input) => {this.username = input}}/>
                        <Input placeholder='Password' ref={(input) => {this.password = input}}type='password' />
                        <Button onClick={() => {this.props.login(this.username.value, this.password.value)}}>Log In</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => {
        console.log('!')
        dispatch(actionCreators.login(username, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)