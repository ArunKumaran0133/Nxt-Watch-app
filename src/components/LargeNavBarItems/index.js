import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'
import WatchContext from '../../context/WatchContext'

import {
  LargeViewNavContainer,
  LargeNavItemsListContainer,
  LargeNavItems,
  LargeItemText,
  ContactUsContainer,
  ContactUSText,
  SocialMediaListContainer,
  SocialMediaItem,
  SocialMediaImage,
  ItemContainer,
} from './styledComponents'

const LargeNavBarItems = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkView} = value
      const isActive = false
      const color = isActive ? '#ff0000' : '#64748b'

      return (
        <>
          <LargeViewNavContainer isDarkView={isDarkView}>
            <LargeNavItemsListContainer>
              <LargeNavItems>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <ItemContainer>
                    <AiFillHome color={color} fontSize={20} />
                    <LargeItemText isDarkView={isDarkView}>Home</LargeItemText>
                  </ItemContainer>
                </Link>
              </LargeNavItems>
              <LargeNavItems>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <ItemContainer>
                    <HiFire color={color} fontSize={20} />
                    <LargeItemText isDarkView={isDarkView}>
                      Trending
                    </LargeItemText>
                  </ItemContainer>
                </Link>
              </LargeNavItems>
              <LargeNavItems>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <ItemContainer>
                    <SiYoutubegaming color={color} fontSize={20} />
                    <LargeItemText isDarkView={isDarkView}>
                      Gaming
                    </LargeItemText>
                  </ItemContainer>
                </Link>
              </LargeNavItems>
              <LargeNavItems>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <ItemContainer>
                    <BiListPlus color={color} fontSize={20} />
                    <LargeItemText isDarkView={isDarkView}>
                      Saved Videos
                    </LargeItemText>
                  </ItemContainer>
                </Link>
              </LargeNavItems>
            </LargeNavItemsListContainer>
            <ContactUsContainer>
              <ContactUSText isDarkView={isDarkView}>Contact Us</ContactUSText>
              <SocialMediaListContainer>
                <SocialMediaItem>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                </SocialMediaItem>
                <SocialMediaItem>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                </SocialMediaItem>
                <SocialMediaItem>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaItem>
              </SocialMediaListContainer>
              <ContactUSText isDarkView={isDarkView}>
                Enjoy! Now to see your channels and recommendations!
              </ContactUSText>
            </ContactUsContainer>
          </LargeViewNavContainer>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default LargeNavBarItems
