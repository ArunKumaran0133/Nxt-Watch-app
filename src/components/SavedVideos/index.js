import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import LargeNavBarItems from '../LargeNavBarItems'
import WatchContext from '../../context/WatchContext'
import SavedVideosCart from '../SavedVideosCart'

import {
  SavedVideosAndNavContainer,
  SavedVideosMainContainer,
  SavedVideosHeaderContainer,
  IconContainer,
  SavedVideosHeading,
  SavedVideosVideosList,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultPara,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSearchResultsView = isDarkView => (
    <NoSearchResultContainer>
      <NoSearchResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSearchResultHeading isDarkView={isDarkView}>
        No Saved Videos Found
      </NoSearchResultHeading>
      <NoSearchResultPara>
        You can save your videos while watching them
      </NoSearchResultPara>
    </NoSearchResultContainer>
  )

  renderSuccessView = savedVideoList => (
    <SavedVideosVideosList>
      {savedVideoList.map(eachVideo => (
        <SavedVideosCart key={eachVideo.id} videoDetails={eachVideo} />
      ))}
    </SavedVideosVideosList>
  )

  renderResultView = (savedVideoList, isDarkView) => {
    if (savedVideoList.length === 0) {
      return this.renderNoSearchResultsView(isDarkView)
    }
    return this.renderSuccessView(savedVideoList)
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkView, savedVideoList} = value

          return (
            <>
              <Header />
              <SavedVideosAndNavContainer>
                <LargeNavBarItems />
                <SavedVideosMainContainer isDarkView={isDarkView}>
                  <SavedVideosHeaderContainer isDarkView={isDarkView}>
                    <IconContainer>
                      <HiFire fontSize={30} color="#ff0b37" />
                    </IconContainer>
                    <SavedVideosHeading isDarkView={isDarkView}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosHeaderContainer>
                  {this.renderResultView(savedVideoList, isDarkView)}
                </SavedVideosMainContainer>
              </SavedVideosAndNavContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default SavedVideos
