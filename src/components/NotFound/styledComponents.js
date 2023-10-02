import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  min-height: 90vh;
  background-color: ${props => (props.isDarkView ? '#181818' : '#f1f1f1')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const NotFoundImage = styled.img`
  height: 300px;
  width: 300px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
  font-weight: 800;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const NotFoundAndNavContainer = styled.div`
  display: flex;
`
