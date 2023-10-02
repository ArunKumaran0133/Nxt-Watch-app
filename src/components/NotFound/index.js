import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import LargeNavBarItems from '../LargeNavBarItems'

import {
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundPara,
  NotFoundHeading,
  NotFoundAndNavContainer,
} from './styledComponents'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkView} = value
      const notFoundImage = isDarkView
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundAndNavContainer>
            <LargeNavBarItems />
            <NotFoundBgContainer isDarkView={isDarkView}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading isDarkView={isDarkView}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundBgContainer>
          </NotFoundAndNavContainer>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound
