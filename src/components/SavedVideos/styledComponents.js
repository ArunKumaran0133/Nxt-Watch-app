import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  background-color: ${props => (props.isDarkView ? '#0f0f0f' : '#f9f9f9')};
  min-height: 90vh;
  width: 100%;
`

export const SavedVideosAndNavContainer = styled.div`
  display: flex;
`

export const SavedVideosHeaderContainer = styled.div`
  background-color: ${props => (props.isDarkView ? '#231f20' : '#f1f1f1')};
  min-height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
`
export const IconContainer = styled.div`
  background-color: #94a3b8;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
`
export const SavedVideosVideosList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSearchResultContainer = styled.div`
  min-height: 90vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
