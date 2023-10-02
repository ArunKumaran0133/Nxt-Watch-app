import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import LargeNavBarItems from '../LargeNavBarItems'
import Header from '../Header'
import WatchContext from '../../context/WatchContext'
import VideoCart from '../VideoCart'

import {
  HomeMainContainer,
  PremiumCartContainer,
  HomeBgContainer,
  AppLogo,
  PrePaidPlanText,
  CustomButton,
  AppLogoContainer,
  FilerSearchInput,
  SearchIconContainer,
  InputContainer,
  FilterResultsContainer,
  VideoCartListContainer,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultPara,
  CustomButtonRetry,
  LoadingView,
  CustomButtonClose,
} from './styledComponents'

const apiStatusObj = {
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    initialSearchInput: '',
    searchInput: '',
    videoList: [],
    apiStatus: apiStatusObj.initial,
    bannerIsActive: true,
  }

  componentDidMount() {
    this.getAllVideosDetails()
  }

  reRenderApi = () => {
    this.getAllVideosDetails()
  }

  searchResult = () => {
    this.getAllVideosDetails()
  }

  closeBanner = () => {
    this.setState({bannerIsActive: false})
  }

  getAllVideosDetails = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
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
      this.setState({videoList: formattedData, apiStatus: apiStatusObj.success})
    } else {
      this.setState({apiStatus: apiStatusObj.failure})
    }
  }

  getSearchInput = event => {
    this.setState({initialSearchInput: event.target.value})
  }

  getFilterResult = () => {
    const {initialSearchInput} = this.state
    this.setState(
      {searchInput: initialSearchInput, initialSearchInput: ''},
      this.getAllVideosDetails,
    )
  }

  renderPremiumView = () => (
    <PremiumCartContainer>
      <AppLogoContainer data-testid="banner">
        <AppLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PrePaidPlanText>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PrePaidPlanText>
        <CustomButton type="button">GET IT NOW</CustomButton>
      </AppLogoContainer>
      <CustomButtonClose
        type="button"
        onClick={this.closeBanner}
        data-testid="close"
      >
        <AiOutlineClose fontSize={25} />
      </CustomButtonClose>
    </PremiumCartContainer>
  )

  renderSearchView = isDarkView => {
    const {initialSearchInput} = this.state
    return (
      <InputContainer>
        <FilerSearchInput
          type="search"
          placeholder="Search"
          onChange={this.getSearchInput}
          value={initialSearchInput}
        />
        <SearchIconContainer
          isDarkView={isDarkView}
          onClick={this.getFilterResult}
          type="button"
          data-testid="searchButton"
        >
          <AiOutlineSearch fontSize={20} color="#64748b" />
        </SearchIconContainer>
      </InputContainer>
    )
  }

  renderSearchResultsView = () => {
    const {videoList} = this.state

    return (
      <VideoCartListContainer>
        {videoList.map(eachVideo => (
          <VideoCart key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideoCartListContainer>
    )
  }

  renderNoSearchResultsView = isDarkView => (
    <NoSearchResultContainer>
      <NoSearchResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultHeading isDarkView={isDarkView}>
        No Search Results Found
      </NoSearchResultHeading>
      <NoSearchResultPara>
        Try different key words or remove search filter
      </NoSearchResultPara>
      <CustomButtonRetry type="button" onClick={this.searchResult}>
        Retry
      </CustomButtonRetry>
    </NoSearchResultContainer>
  )

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

  renderSuccessView = isDarkView => {
    const {videoList} = this.state
    if (videoList.length === 0) {
      return this.renderNoSearchResultsView(isDarkView)
    }
    return this.renderSearchResultsView(isDarkView)
  }

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
    const {bannerIsActive} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkView} = value
          return (
            <>
              <Header />
              <HomeMainContainer>
                <LargeNavBarItems />
                <HomeBgContainer isDarkView={isDarkView}>
                  {bannerIsActive ? this.renderPremiumView() : ''}
                  <FilterResultsContainer>
                    {this.renderSearchView(isDarkView)}
                    {this.renderResultView(isDarkView)}
                  </FilterResultsContainer>
                </HomeBgContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
