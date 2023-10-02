import styled from 'styled-components'

export const CartItem = styled.li`
  height: 320px;
  width: 250px;
  margin-top: 20px;
  margin-top: 20px;
  margin-right: 20px;
`

export const VideoImage = styled.img`
  height: 150px;
  width: 250px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
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
