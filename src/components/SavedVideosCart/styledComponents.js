import styled from 'styled-components'

export const SavedItemContainer = styled.li`
  margin-bottom: 20px;
  margin-top: 20px;
  width: 80%;
`
export const SavedBgItemContainer = styled.div`
  display: flex;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const VideoImage = styled.img`
  height: 200px;
  width: 80%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 50%;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
  font-weight: 400;
  margin-top: 0px;
  text-decoration: none;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #64748b;
  margin-bottom: 10px;
  margin-top: 0px;
  text-decoration: none;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
