import {Component} from 'react'
import Cookies from 'js-cookie'
import {ImFire} from 'react-icons/im'
import Loader from 'react-loader-spinner'

import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import LargeNavBarItems from '../LargeNavBarItems'
import TrendingVideoCart from '../TrendingVideoCart'

import {
  TrendingMainContainer,
  TrendingHeaderContainer,
  IconContainer,
  TrendingHeading,
  TrendingAndNavContainer,
  TrendingVideosList,
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

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: apiStatusObj.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  reRenderApi = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideos: formattedData,
        apiStatus: apiStatusObj.success,
      })
    } else {
      this.setState({apiStatus: apiStatusObj.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoCart key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosList>
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
              <TrendingAndNavContainer>
                <LargeNavBarItems />
                <TrendingMainContainer
                  isDarkView={isDarkView}
                  data-testid="trending"
                >
                  <TrendingHeaderContainer isDarkView={isDarkView}>
                    <IconContainer>
                      <ImFire fontSize={30} color="#ff0b37" />
                    </IconContainer>
                    <TrendingHeading isDarkView={isDarkView}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeaderContainer>
                  {this.renderResultView(isDarkView)}
                </TrendingMainContainer>
              </TrendingAndNavContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
