import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
`

export const PremiumCartContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HomeBgContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkView ? '#0f0f0f' : '#f9f9f9')};
`

export const AppLogo = styled.img`
  height: 40px;
  width: 100px;
`

export const PrePaidPlanText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #0f0f0f;
  font-weight: 400;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: 2px solid #0f0f0f;
  color: #0f0f0f;
  border-radius: 5px;
  height: 33px;
  width: 120px;
  outline: none;
  cursor: pointer;
`
export const AppLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const FilerSearchInput = styled.input`
  height: 33px;
  width: 400px;
  background-color: transparent;
  outline: none;
  padding-left: 10px;
  border: 1px solid #616e7c;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SearchIconContainer = styled.button`
  background-color: ${props => (props.isDarkView ? '#1e293b' : '#cccccc')};
  height: 33px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-left: none;
  border: 1px solid #616e7c;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const FilterResultsContainer = styled.div`
  padding: 20px;
`
export const VideoCartListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  align-items: center;

  flex-wrap: wrap;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CustomButtonClose = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
`
