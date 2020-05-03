import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

// 本质就是div
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  font-family: Arial;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
` 

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  &.left {
      float: left;
  }
  &.right {
      float: right;
      color: #969696;
  }
  &.active {
      color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    line-height: 30px;
    width: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
  width: 220px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
      color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: all .2s ease-out
  }
  &.slide-enter-active {
    width: 300px;
  }
  &.slide-exit {
    transition: all .2s ease-out
  }
  &.slide-exit-active {
    width: 220px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 300px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoArrow = styled.div`
  position: absolute;
  left: 45px;
  top: -9px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoSwitch = styled.span`
  position: relative;
  left: 0;
  top: 0;
  float: right;
  font-size: 13px;
`

export const SearchInfoItem = styled.a`
  float: left;
  display: block;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.sign-up {
    color: #ec6149;
  }
  &.compose {
    color: #fff;
    background: #ec6149;
  }
`