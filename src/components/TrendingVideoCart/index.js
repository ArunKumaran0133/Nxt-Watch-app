import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'
import WatchContext from '../../context/WatchContext'

import {
  TrendingItemContainer,
  ImageContainer,
  VideoImage,
  TextContainer,
  Title,
  ViewsContainer,
  Views,
  TrendingBgItemContainer,
} from './styledComponents'

const TrendingVideoCart = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    viewCount,
    title,
    channel,
  } = videoDetails
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkView} = value
        return (
          <TrendingItemContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <TrendingBgItemContainer>
                <ImageContainer>
                  <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                </ImageContainer>
                <TextContainer>
                  <Title isDarkView={isDarkView}>{title}</Title>
                  <Views>{channel.name}</Views>
                  <ViewsContainer>
                    <Views>{viewCount} Views</Views>
                    <BsDot color="#64748b" fontSize={25} />
                    <Views>{publishedAt}</Views>
                  </ViewsContainer>
                </TextContainer>
              </TrendingBgItemContainer>
            </Link>
          </TrendingItemContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingVideoCart
