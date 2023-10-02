import styled from 'styled-components'

export const GamingItemContainer = styled.li`
  margin-bottom: 20px;
  margin-top: 20px;

  margin: 10px;
`

export const VideoImage = styled.img`
  height: 350px;
  width: 250px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
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
