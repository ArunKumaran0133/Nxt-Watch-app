import React from 'react'

const WatchContext = React.createContext({
  isDarkView: false,
  isNavItemsActive: false,
  onToggleView: () => {},
  onToggleNavItem: () => {},
  savedVideoList: [],
  addToSavedVideos: () => {},
  isVideoSaved: false,
})

export default WatchContext
