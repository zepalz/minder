import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { YellowBox } from 'react-native'

import AuthNavigator from './navigators/AuthNavigator'
import HomeNavigator from './navigators/HomeNavigator'

const App = createSwitchNavigator({
  AuthNavigator,
  HomeNavigator
})

YellowBox.ignoreWarnings(['Setting a timer'])

export default createAppContainer(App)
