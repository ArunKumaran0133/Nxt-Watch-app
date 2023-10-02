import styled from 'styled-components'

export const VideoDetailBgContainer = styled.div`
  background-color: ${props => (props.isDarkView ? '#212121' : '#f1f5f9')};
  min-height: 90vh;
  padding: 20px;
  width: 100%;
`
export const VideoDetailAndNavContainer = styled.div`
  display: flex;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: #64748b;
  margin-bottom: 0px;
  margin-top: 0px;
  text-decoration: none;
`
export const LikeAndViesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.isVideoSaved ? '#3b82f6' : '#64748b')};
  margin-left: 5px;
`

export const LikeMAinContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SubscriptionContainer = styled.div`
  width: 80%;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 18px;
  margin-right: 20px;
`
export const DescriptionContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
`
export const NoSearchResultContainer = styled.div`
  background-color: ${props => (props.isDarkView ? '#212121' : '#f1f5f9')};
  min-height: 90vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const NoSearchResultImage = styled.img`
  height: 300px;
  width: 300px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`

export const NoSearchResultHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const NoSearchResultPara = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const CustomButtonRetry = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: white;
  border: none;
  outline: none;
  width: 90px;
  height: 33px;
  background-color: #4f46e5;
  border-radius: 5px;
  cursor: pointer;
`
export const LoadingView = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
