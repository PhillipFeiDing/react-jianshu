import React , { Component } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterInfoTitle, WriterInfoSwitch, WriterItem, WriterInfoWrapper, WriterFollow } from '../style'

class Writer extends Component {

    render() {
        const page = 0
        const totalPage = 0
        const { handleChangePage } = this.props
        return (
            <WriterWrapper>
                <WriterInfoTitle>
                    Recommended Writers
                    <WriterInfoSwitch
                        onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}
                    >
                        <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe6ad;</i>
                        See More
                    </WriterInfoSwitch>
                </WriterInfoTitle>
                <WriterItem>
                    <img src='/writer/ice-mile.png' alt='48' className='writerImg'/>
                    <WriterInfoWrapper>
                        <p className='writerName'>Ice Mile</p>
                        <p className='writerDesc'>Wrote 319k Words · 3.6k Like</p>
                    </WriterInfoWrapper>
                    <WriterFollow>
                        + Follow
                    </WriterFollow>
                </WriterItem>
                <WriterItem>
                    <img src='/writer/ice-mile.png' alt='48' className='writerImg'/>
                    <WriterInfoWrapper>
                        <p className='writerName'>Ice Mile</p>
                        <p className='writerDesc'>Wrote 319k Words · 3.6k Like</p>
                    </WriterInfoWrapper>
                    <WriterFollow>
                        + Follow
                    </WriterFollow>
                </WriterItem>
            </WriterWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleChangePage: (page, totalPage, spin) => {
        const currAngle = (spin.style.transform || '0').replace(/[^0-9]/ig, '')
        spin.style.transform = `rotate(${parseInt(currAngle) + 360}deg)`
    }
})

export default connect(null, mapDispatchToProps)(Writer)