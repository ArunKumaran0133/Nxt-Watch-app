import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import WatchContext from '../../context/WatchContext'

import {
  CartItem,
  VideoImage,
  ProfileImage,
  DescriptionContainer,
  TextContainer,
  Title,
  ViewsContainer,
  Views,
} from './styledComponents'

const VideoCart = props => {
  const {videoDetails} = props
  console.log(videoDetails)
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkView} = value
        return (
          <CartItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <TextContainer>
                  <Title isDarkView={isDarkView}>{title}</Title>
                  <Views>{channel.name}</Views>
                  <ViewsContainer>
                    <Views>{viewCount} Views</Views>
                    <BsDot color="#64748b" fontSize={25} />
                    <Views>{publishedAt}</Views>
                  </ViewsContainer>
                </TextContainer>
              </DescriptionContainer>
            </Link>
          </CartItem>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoCart
