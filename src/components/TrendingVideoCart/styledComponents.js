import styled from 'styled-components'

export const TrendingItemContainer = styled.li`
  margin-bottom: 20px;
  margin-top: 20px;
  width: 80%;
`

export const ImageContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const VideoImage = styled.img`
  height: 250px;
  width: 100%;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
  font-weight: 400;
  margin-top: 0px;
  text-decoration: none;
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
export const TrendingBgItemContainer = styled.div`
  display: flex;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
