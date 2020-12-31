import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator()

class AuthNavigator extends Component {
  // static router = StackNavigator.router

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ horizontal: 'always', top: 'always' }}>
        {/* <Stack.Navigator initialRouteName='Auth'> */}
          <LoginScreen />
        {/* </Stack.Navigator> */}
      </SafeAreaView>
    )
  }
}

export default AuthNavigator
