import {FaMoon} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'

import {
  NavContainerMobile,
  LogoContainer,
  LogoImage,
  NavItemsContainer,
  MobileViewNavContainer,
  AppLogo,
  NavItemsListContainer,
  ListItem,
  CustomButton,
  ListItemLogout,
  ListItemNavMenu,
  UserLogo,
  ItemText,
  NavItems,
  ItemContainer,
  PopUpContainer,
  PopUpText,
  CustomButtonLogout,
  LogOutButton,
} from './styledComponents'

const Header = props => (
  <WatchContext.Consumer>
    {value => {
      const {
        isDarkView,
        onToggleView,
        onToggleNavItem,
        isNavItemsActive,
      } = value

      const style = isDarkView ? '#ff0000' : '#64748b'

      const logoImage = isDarkView
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const iconTheme = isDarkView ? (
        <FiSun fontSize={25} color="#f1f1f1" />
      ) : (
        <FaMoon fontSize={25} color="#181818" />
      )

      const menuNavIcon = isDarkView ? (
        <GiHamburgerMenu fontSize={25} color="#f1f1f1" />
      ) : (
        <GiHamburgerMenu fontSize={25} color="#181818" />
      )

      const closeNavIcon = isDarkView ? (
        <AiOutlineClose fontSize={25} color="#f1f1f1" />
      ) : (
        <AiOutlineClose fontSize={25} color="#181818" />
      )

      const logoutNavIcon = isDarkView ? (
        <FiLogOut fontSize={25} color="#f1f1f1" />
      ) : (
        <FiLogOut fontSize={25} color="#181818" />
      )

      const onClickThemeChange = () => {
        onToggleView()
      }

      const onToggleNaveItems = () => {
        onToggleNavItem()
      }

      const closeNavBar = () => {
        onToggleNavItem()
      }

      const conformLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <div>
          <NavContainerMobile isDarkView={isDarkView}>
            <LogoContainer isDarkView={isDarkView}>
              <Link to="/" style={{textDecoration: 'none'}}>
                <LogoImage src={logoImage} alt="website logo" />
              </Link>
            </LogoContainer>
            <NavItemsContainer>
              <li>
                <ListItem
                  type="button"
                  onClick={onClickThemeChange}
                  data-testid="theme"
                >
                  {iconTheme}
                </ListItem>
              </li>
              <li>
                <UserLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <ListItemNavMenu onClick={onToggleNaveItems}>
                {isNavItemsActive ? closeNavIcon : menuNavIcon}
              </ListItemNavMenu>
              <div>
                <Popup
                  modal
                  trigger={
                    <CustomButton type="button" isDarkView={isDarkView}>
                      Logout
                    </CustomButton>
                  }
                  closeOnEscape
                  window
                >
                  {close => (
                    <PopUpContainer isDarkView={isDarkView}>
                      <PopUpText isDarkView={isDarkView}>
                        Are you sure, you want to logout
                      </PopUpText>
                      <div>
                        <CustomButtonLogout
                          type="button"
                          onClick={() => close()}
                          outline
                        >
                          Cancel
                        </CustomButtonLogout>
                        <CustomButtonLogout onClick={conformLogout}>
                          Conform
                        </CustomButtonLogout>
                      </div>
                    </PopUpContainer>
                  )}
                </Popup>
              </div>
              <ListItemLogout>
                <Popup
                  modal
                  trigger={
                    <LogOutButton type="button">{logoutNavIcon}</LogOutButton>
                  }
                  closeOnEscape
                  window
                >
                  {close => (
                    <PopUpContainer isDarkView={isDarkView}>
                      <PopUpText isDarkView={isDarkView}>
                        Are you Sure you want logout?
                      </PopUpText>
                      <div>
                        <CustomButtonLogout
                          type="button"
                          onClick={() => close()}
                          outline
                          isDarkView={isDarkView}
                        >
                          Cancel
                        </CustomButtonLogout>
                        <CustomButtonLogout
                          isDarkView={isDarkView}
                          onClick={conformLogout}
                        >
                          Conform
                        </CustomButtonLogout>
                      </div>
                    </PopUpContainer>
                  )}
                </Popup>
              </ListItemLogout>
            </NavItemsContainer>
          </NavContainerMobile>
          {isNavItemsActive ? (
            <MobileViewNavContainer isDarkView={isDarkView}>
              <AppLogo src={logoImage} />
              <NavItemsListContainer isDarkView={isDarkView}>
                <NavItems>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <ItemContainer type="button" onClick={closeNavBar}>
                      <AiFillHome color={style} fontSize={20} />
                      <ItemText isDarkView={isDarkView}>Home</ItemText>
                    </ItemContainer>
                  </Link>
                </NavItems>

                <NavItems>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <ItemContainer type="button" onClick={closeNavBar}>
                      <HiFire color={style} fontSize={20} />
                      <ItemText isDarkView={isDarkView}>Trending</ItemText>
                    </ItemContainer>
                  </Link>
                </NavItems>
                <NavItems>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <ItemContainer type="button" onClick={closeNavBar}>
                      <SiYoutubegaming color={style} fontSize={20} />
                      <ItemText isDarkView={isDarkView}>Gaming</ItemText>
                    </ItemContainer>
                  </Link>
                </NavItems>
                <NavItems>
                  <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                    <ItemContainer type="button" onClick={closeNavBar}>
                      <BiListPlus color={style} fontSize={20} />
                      <ItemText isDarkView={isDarkView}>Saved Videos</ItemText>
                    </ItemContainer>
                  </Link>
                </NavItems>
              </NavItemsListContainer>
            </MobileViewNavContainer>
          ) : null}
        </div>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(Header)
