import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'

export default createAppContainer(createStackNavigator({
  LoginScreen,
}))