import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { WriterWrapper, WriterInfoTitle, WriterInfoSwitch, WriterItem, WriterInfoWrapper, WriterFollow, WriterFindMore } from '../style'

class Writer extends PureComponent {

    render() {
        const { list, page, totalPage, handleChangePage } = this.props
        const thisList = list.toJS().splice(page * 5, 5)
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
                {
                    thisList.map((item) => (
                        <WriterItem key={item.id}>
                            <img src={item.imgUrl} alt='48' className='writerImg'/>
                            <WriterInfoWrapper>
                                <p className='writerName'>{item.name}</p>
                                <p className='writerDesc'>Wrote {item.words} Words · {item.likes} Likes</p>
                            </WriterInfoWrapper>
                            <WriterFollow>
                                <span className='plus'>+</span> Follow
                            </WriterFollow>
                        </WriterItem>
                    ))
                }
                <WriterFindMore>
                    See All <span className='narrow'>&gt;</span>
                </WriterFindMore>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList']),
    page: state.getIn(['home', 'writerPage']),
    totalPage: state.getIn(['home', 'writerTotalPage'])
})

const mapDispatchToProps = (dispatch) => ({
    handleChangePage: (page, totalPage, spin) => {
        const currAngle = (spin.style.transform || '0').replace(/[^0-9]/ig, '')
        spin.style.transform = `rotate(${parseInt(currAngle) + 360}deg)`
        dispatch(actionCreators.changePage((page + 1) % totalPage))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer)