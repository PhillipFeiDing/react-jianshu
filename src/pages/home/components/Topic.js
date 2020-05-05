import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, TopicMoreText } from '../style'

class Topic extends PureComponent {

    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item, index) => (
                        <TopicItem key={item.get('id')}>
                            <img
                                src={item.get('imgUrl')}
                                alt='64'
                                className='topic-pic'
                            />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
                <TopicMoreText>
                    More Hot Topics <span className='narrow'>&gt;</span>
                </TopicMoreText>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic)