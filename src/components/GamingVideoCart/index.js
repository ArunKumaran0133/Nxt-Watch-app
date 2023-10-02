import {Link} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'

import {GamingItemContainer, VideoImage, Title, Views} from './styledComponents'

const TrendingVideoCart = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, viewCount, title} = videoDetails
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkView} = value
        return (
          <GamingItemContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <Title isDarkView={isDarkView}>{title}</Title>
              <Views>{viewCount} Watching Worldwide</Views>
            </Link>
          </GamingItemContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingVideoCart
