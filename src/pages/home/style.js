import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
      width: 625px;
      height: 270px;
      border-radius: 5px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-left: 18px;
  padding-right: 10px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 3px 0 0 3px;
  }
`

export const TopicMoreText = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #777;
  margin-left: 18px;
  cursor: pointer;
  .narrow {
    display:inline-block;
    -webkit-transform:scale(0.75,1.25); /* Safari and Chrome */
    -moz-transform:scale(0.75,1.25); /* Firefox */
    -ms-transform:scale(0.75,1.25); /* IE 9 */
    -o-transform:scale(0.75,1.25); /* Opera */
    transform:scale(0.75,1.25); /* W3C */
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 140px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 5px;
  }
`

export const ListInfo = styled.div`
  width: 485px;
  float: left;
  padding-right: 5px;
  box-sizing: border-box;
  .title {
      line-height: 27px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
  }
  .desc {
      font-size: 13px;
      line-height: 18px;
      color: #999;
  }
  .footer {
      padding-top: 5px;
      font-size: 12px;
      line-height: 24px;
      color: #aaa;
      span {
          padding-right: 15px;
          .iconfont {
            font-size: 12px;
            padding-right: 2px;
          }
      }
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => (props.imgUrl)});
  background-size: contain;
  margin-bottom: 5px;
`

export const WriterWrapper = styled.div`
  width: 280px;
`

export const WriterInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const WriterInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const WriterItem = styled.div`
  overflow: hidden;
  margin-bottom: 15px;
  .writerImg {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: solid 1px #ddd;
  }
`

export const WriterInfoWrapper = styled.div`
  float: left;
  margin-left: 10px;
  .writerName {
    color: #000;
    font-size: 14px;
    line-height: 24px;
  }
  .writerDesc {
    font-size: 12px;
    line-height: 24px;
    color: #999;
  }
`

export const WriterFollow = styled.div`
  float: right;
  font-size: 13px;
  color: #42c02e;
`