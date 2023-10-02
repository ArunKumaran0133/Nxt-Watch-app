import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import WatchContext from '../../context/WatchContext'

import {
  SavedItemContainer,
  SavedBgItemContainer,
  ImageContainer,
  TextContainer,
  Title,
  ViewsContainer,
  Views,
  VideoImage,
} from './styledComponents'

const SavedVideosCart = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, name, publishedAt, viewCount} = videoDetails
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkView} = value
        return (
          <SavedItemContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <SavedBgItemContainer>
                <ImageContainer>
                  <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                </ImageContainer>
                <TextContainer>
                  <Title isDarkView={isDarkView}>{title}</Title>
                  <Views>{name}</Views>
                  <ViewsContainer>
                    <Views>{viewCount}</Views>
                    <BsDot color="#64748b" fontSize={25} />
                    <Views>{publishedAt}</Views>
                  </ViewsContainer>
                </TextContainer>
              </SavedBgItemContainer>
            </Link>
          </SavedItemContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default SavedVideosCart
