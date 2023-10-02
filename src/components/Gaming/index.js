import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import LargeNavBarItems from '../LargeNavBarItems'
import GamingVideoCart from '../GamingVideoCart'

import {
  GamingMainContainer,
  GamingHeaderContainer,
  IconContainer,
  GamingHeading,
  GamingAndNavContainer,
  GamingVideosList,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultPara,
  CustomButtonRetry,
  LoadingView,
} from './styledComponents'

const apiStatusObj = {
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusObj.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  reRenderApi = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, option)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: formattedData,
        apiStatus: apiStatusObj.success,
      })
    } else {
      this.setState({apiStatus: apiStatusObj.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCart key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideosList>
    )
  }

  renderFailureView = isDarkView => {
    const FailureImage = isDarkView
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <NoSearchResultContainer>
        <NoSearchResultImage src={FailureImage} alt="failure view" />
        <NoSearchResultHeading isDarkView={isDarkView}>
          Oops! Something Went Wrong
        </NoSearchResultHeading>
        <NoSearchResultPara>
          We are having some trouble to complete your request. please try again.
        </NoSearchResultPara>
        <CustomButtonRetry type="button" onClick={this.reRenderApi}>
          Retry
        </CustomButtonRetry>
      </NoSearchResultContainer>
    )
  }

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader color="#3b82f6" type="ThreeDots" />
    </LoadingView>
  )

  renderResultView = isDarkView => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusObj.success:
        return this.renderSuccessView(isDarkView)
      case apiStatusObj.inProgress:
        return this.renderLoadingView(isDarkView)
      case apiStatusObj.failure:
        return this.renderFailureView(isDarkView)
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkView} = value

          return (
            <>
              <Header />
              <GamingAndNavContainer>
                <LargeNavBarItems />
                <GamingMainContainer
                  isDarkView={isDarkView}
                  data-testid="gaming"
                >
                  <GamingHeaderContainer isDarkView={isDarkView}>
                    <IconContainer>
                      <SiYoutubegaming fontSize={30} color="#ff0b37" />
                    </IconContainer>
                    <GamingHeading isDarkView={isDarkView}>
                      Gaming
                    </GamingHeading>
                  </GamingHeaderContainer>
                  {this.renderResultView(isDarkView)}
                </GamingMainContainer>
              </GamingAndNavContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming
