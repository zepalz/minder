import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './navigators/AuthNavigator'
import HomeNavigator from './navigators/HomeNavigator'
// import HomeScreen from './screens/HomeScreen'
// import SearchScreen from './screens/SearchScreen'
// import UserScreen from './screens/UserScreen'
// import LoginScreen from './screens/LoginScreen'


const App = createSwitchNavigator({
  AuthNavigator,
  HomeNavigator
})

// const AuthNavigator = createAppContainer(createStackNavigator({
//   LoginScreen,
// }))

// const HomeNavigator = createAppContainer(createStackNavigator({
//   HomeScreen,
//   SearchScreen,
//   UserScreen
// }))

export default createAppContainer(App)
