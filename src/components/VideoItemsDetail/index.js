import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import WatchContext from '../../context/WatchContext'
import LargeNavBarItems from '../LargeNavBarItems'
import Header from '../Header'

import {
  VideoDetailBgContainer,
  VideoDetailAndNavContainer,
  VideoTitle,
  ViewsContainer,
  Views,
  LikeAndViesContainer,
  LikeContainer,
  Text,
  LikeMAinContainer,
  SubscriptionContainer,
  ChannelLogo,
  DescriptionContainer,
  NoSearchResultContainer,
  NoSearchResultHeading,
  NoSearchResultImage,
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

class VideoItemsDetail extends Component {
  state = {
    videoDetails: {},
    channelData: {},
    isBtnLikeClicked: false,
    isBtnDisLikeClicked: false,
    apiStatus: apiStatusObj.initial,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isBtnLikeClicked: !prevState.isBtnLikeClicked,
      isBtnDisLikeClicked: false,
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({
      isBtnDisLikeClicked: !prevState.isBtnDisLikeClicked,
      isBtnLikeClicked: false,
    }))
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, option)
    if (response.ok) {
      const data = await response.json()

      const formattedData = {
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      const formattedChannelData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({
        videoDetails: formattedData,
        channelData: formattedChannelData,
        apiStatus: apiStatusObj.success,
      })
    } else {
      this.setState({apiStatus: apiStatusObj.failure})
    }
  }

  renderSuccessView = () => (
    <WatchContext.Consumer>
      {value => {
        const {isDarkView, addToSavedVideos, isVideoSaved} = value
        const {videoDetails, isBtnLikeClicked, isBtnDisLikeClicked} = this.state

        const Like = isBtnLikeClicked ? '#2563eb' : '#64748b'
        const DisLike = isBtnDisLikeClicked ? '#2563eb' : '#64748b'
        const saved = isVideoSaved ? '#2563eb' : '#64748b'
        const {
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoDetails
        const {channelData} = this.state
        const {name, subscriberCount, profileImageUrl} = channelData
        const onClickSaveButton = () => {
          addToSavedVideos({...videoDetails, ...channelData})
        }

        return (
          <VideoDetailBgContainer
            isDarkView={isDarkView}
            data-testid="videoItemDetails"
          >
            <ReactPlayer url={videoUrl} controls width="100%" height={400} />
            <VideoTitle isDarkView={isDarkView}>{title}</VideoTitle>
            <LikeAndViesContainer>
              <ViewsContainer>
                <Views>{viewCount} Views</Views>
                <BsDot color="#64748b" fontSize={25} />
                <Views>{publishedAt}</Views>
              </ViewsContainer>
              <LikeMAinContainer>
                <LikeContainer type="button" onClick={this.onClickLikeButton}>
                  <BiLike fontSize={20} color={Like} />
                  <Text isBtnClicked={isBtnLikeClicked}>Like</Text>
                </LikeContainer>
                <LikeContainer
                  type="button"
                  onClick={this.onClickDisLikeButton}
                >
                  <BiDislike fontSize={20} color={DisLike} />
                  <Text isBtnClicked={isBtnDisLikeClicked}>Dislike</Text>
                </LikeContainer>
                <LikeContainer type="button" onClick={onClickSaveButton}>
                  <BiListPlus fontSize={20} color={saved} />
                  <Text isVideoSaved={isVideoSaved}>Save</Text>
                </LikeContainer>
              </LikeMAinContainer>
            </LikeAndViesContainer>
            <hr />
            <DescriptionContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <SubscriptionContainer>
                <VideoTitle isDarkView={isDarkView}>{name}</VideoTitle>
                <Text>{subscriberCount} Subscribers</Text>
                <Text>{description}</Text>
              </SubscriptionContainer>
            </DescriptionContainer>
          </VideoDetailBgContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  renderFailureView = () => (
    <WatchContext.Consumer>
      {value => {
        const {isDarkView} = value
        const FailureImage = isDarkView
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoSearchResultContainer isDarkView={isDarkView}>
            <NoSearchResultImage src={FailureImage} alt="failure view" />
            <NoSearchResultHeading isDarkView={isDarkView}>
              Oops! Something Went Wrong
            </NoSearchResultHeading>
            <NoSearchResultPara>
              We are having some trouble to complete your request. please try
              again.
            </NoSearchResultPara>
            <CustomButtonRetry type="button" onClick={this.reRenderApi}>
              Retry
            </CustomButtonRetry>
          </NoSearchResultContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader color="#3b82f6" type="ThreeDots" />
    </LoadingView>
  )

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusObj.success:
        return this.renderSuccessView()
      case apiStatusObj.inProgress:
        return this.renderLoadingView()
      case apiStatusObj.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoDetailAndNavContainer>
          <LargeNavBarItems />
          {this.renderResultView()}
        </VideoDetailAndNavContainer>
      </>
    )
  }
}

export default VideoItemsDetail
