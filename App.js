import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen
})

export default createAppContainer(AppNavigator)