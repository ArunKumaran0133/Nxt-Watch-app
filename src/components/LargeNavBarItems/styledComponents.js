import styled from 'styled-components'

export const LargeViewNavContainer = styled.div`
  padding-left: 20px;
  background-color: ${props => (props.isDarkView ? '#181818' : 'white')};
  border-top: 1px solid ${props => (props.isDarkView ? '#e2e8f0' : '#1e293b')};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  width: 25%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LargeNavItemsListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
`
export const LargeNavItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`
export const LargeItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
  color: ${props => (props.isDarkView ? '#e2e8f0' : '#1e293b')};
  margin-bottom: 13px;
`

export const ContactUsContainer = styled.div``

export const ContactUSText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkView ? 'white' : 'black')};
  font-weight: 700;
`

export const SocialMediaListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  align-items: center;
`
export const SocialMediaItem = styled.li`
  margin-right: 10px;
`

export const SocialMediaImage = styled.img`
  height: 40px;
  width: 40px;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`
