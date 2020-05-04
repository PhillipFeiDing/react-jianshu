import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [
        {
            id: 0,
            title: 'Painting',
            imgUrl: '/topic/painting.png'
        },{
            id: 1,
            title: 'Social Hot Spot',
            imgUrl: '/topic/social-hot-spot.png'
        },{
            id: 2,
            title: 'Jianshu Movie',
            imgUrl: '/topic/jianshu-movie.png'
        },
        {
            id: 3,
            title: 'Reading',
            imgUrl: '/topic/reading.png'
        },{
            id: 4,
            title: 'Photography',
            imgUrl: '/topic/photography.png'
        },{
            id: 5,
            title: 'Journey · On the Way',
            imgUrl: '/topic/journey-on-the-way.png'
        },{
            id: 6,
            title: 'History',
            imgUrl: '/topic/history.png'
        }
    ],
    articleList: [
        {
            id: 0,
            title: 'Ge Hu Discussed Car Crash 12 Years Ago: Since I Survived, I Must Live For A Purpose.',
            desc: 'Article/Dr. Mai 01 Ge Hu becomes top hit again! Recently he attended the <span style="font-style: italic;">The Reader</span> for which the topic is "Life". Using his shockingly magnetic voice, he recited a famous exerpt from <span style="font-style: italic;">Hamlet</span>&nbsp;...',
            imgUrl: '/list/huge.png',
            author: 'Dr. Mai',
            comment: 332,
            like: 1389,
            money: 10
        },{
            id: 1,
            title: 'What Happened To Those Kids Who Did Not Take Gaokao',
            desc: '01 It\'s the first day of Gaokao. The exam takers this year are all Millennials. A movie related to Gaokao named <span style="font-style: italic;">China\'s Gate</span> went on live in year 2011. The name itself is descriptive because ...',
            imgUrl: '/list/gaokao.png',
            author: 'Ms. Litty II',
            comment: 89,
            like: 238,
        },{
            id: 2,
            title: '<span style="font-style: italic;">Bucket List</span> -- Love Might Be The Ultimate Reason We Live',
            desc: 'Silent Talk/Article The movie was shot in the the memoir form of the protagonist like a sleepy old man sitting in his patio and peacecully telling his story. He brings his audience to another world with the story ...',
            imgUrl: '/list/bucket-list.png',
            author: 'Silent Talk',
            comment: 39,
            like: 77,
            money: 5
        },{
            id: 3,
            title: 'A Peaceful World',
            desc: 'I would feel unattached in the fast when someone discussed to me the wish for a peaceful world. I would even have accused them of hoaxing my feelings. After I watched the movie <span style="font-style: italic;">Bloody Hacksaw Ridge</span>, I witnessed the shocking side ...',
            imgUrl: '/list/peace.png',
            author: '84k',
            comment: 26,
            like: 57
        }
    ],
    recommendList: [
        {
            id: 0,
            imgUrl: '/recommend/july-hot.png'
        },{
            id: 1,
            imgUrl: '/recommend/30-day-hot.png'
        },{
            id: 2,
            imgUrl: '/recommend/premium-select.png'
        },{
            id: 3,
            imgUrl: '/recommend/jianshu-copyright.png'
        },{
            id: 4,
            imgUrl: '/recommend/jianshu-grand-academy.png'
        }
    ]
})

export default (state=defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}