import React , { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
class Home extends Component {

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
            </HomeWrapper>
        )
    }
}

export default Home