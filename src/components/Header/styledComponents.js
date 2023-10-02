import styled from 'styled-components'

export const NavContainerMobile = styled.nav`
  background-color: ${props => (props.isDarkView ? '#181818' : 'white')};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  height: 40px;
  width: 90px;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 100px;
  }
`

export const LogoContainer = styled.div`
  width: 120px;
`

export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  align-items: center;
`

export const ListItem = styled.button`
  cursor: pointer;
  margin-left: 25px;
  background-color: transparent;
  border: none;
  outline: none;
`

export const MobileViewNavContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.isDarkView ? '#181818' : '#f1f1f1')};
  border-top: 1px solid ${props => (props.isDarkView ? '#e2e8f0' : '#1e293b')};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`

export const AppLogo = styled.img`
  height: 40px;
  width: 90px;
`

export const NavItemsListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.isDarkView ? 'white' : '#3b82f6')};
  color: ${props => (props.isDarkView ? 'white' : '#3b82f6')};
  border-radius: 5px;
  height: 33px;
  width: 90px;
  outline: none;
  cursor: pointer;
  margin-left: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ListItemLogout = styled.li`
  cursor: pointer;
  margin-left: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ListItemNavMenu = styled.li`
  cursor: pointer;
  margin-left: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const UserLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
  color: ${props => (props.isDarkView ? '#e2e8f0' : '#1e293b')};
  margin-bottom: 13px;
`

export const NavItems = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const ItemContainer = styled.button`
  display: flex;
  align-items: center;
`
export const PopUpContainer = styled.div`
  height: 150px;
  width: 300px;
  background-color: ${props => (props.isDarkView ? '#212121' : 'white')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
export const PopUpText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.isDarkView ? '#e2e8f0' : '#1e293b')};
`
export const CustomButtonLogout = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border: 2px solid ${props => (props.outline ? '#64748b' : 'none')};
  color: ${props => (props.outline ? '#64748b' : 'white')};
  border-radius: 5px;
  height: 33px;
  width: 90px;
  outline: none;
  cursor: pointer;
  border: ${props => (props.outline ? '' : 'none')};
  margin-right: 10px;
  margin-left: 10px;
`
export const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
