import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import WatchContext from './context/WatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemsDetail from './components/VideoItemsDetail'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkView: false,
    isNavItemsActive: false,
    savedVideoList: [],
    isVideoSaved: false,
  }

  onToggleView = () => {
    this.setState(prevState => ({isDarkView: !prevState.isDarkView}))
  }

  onToggleNavItem = () => {
    this.setState(prevState => ({
      isNavItemsActive: !prevState.isNavItemsActive,
    }))
  }

  addToSavedVideos = videoDetail => {
    this.setState(prevState => ({isVideoSaved: !prevState.isVideoSaved}))

    const {savedVideoList, isVideoSaved} = this.state
    const videoObj = savedVideoList.find(
      eachItem => eachItem.id === videoDetail.id,
    )
    if (videoObj) {
      this.setState(prevState => ({
        savedVideoList: prevState.savedVideoList.map(eachCartItem => {
          if (videoObj.id !== eachCartItem.id) {
            return {...eachCartItem, isVideoSaved}
          }
          return {...eachCartItem, isVideoSaved}
        }),
      }))
    } else {
      const updatedCartList = [
        ...savedVideoList,
        {...videoDetail, isVideoSaved},
      ]
      this.setState({savedVideoList: updatedCartList})
    }
    console.log(savedVideoList)
  }

  render() {
    const {
      isDarkView,
      isNavItemsActive,
      savedVideoList,
      isVideoSaved,
    } = this.state

    return (
      <WatchContext.Provider
        value={{
          isDarkView,
          isNavItemsActive,
          onToggleView: this.onToggleView,
          onToggleNavItem: this.onToggleNavItem,
          savedVideoList,
          addToSavedVideos: this.addToSavedVideos,
          isVideoSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemsDetail}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}
export default App
