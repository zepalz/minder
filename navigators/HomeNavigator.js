import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import UserScreen from '../screens/UserScreen'

export default createAppContainer(createStackNavigator({
  HomeScreen,
  SearchScreen,
  UserScreen
}))