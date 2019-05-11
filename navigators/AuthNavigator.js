import React, { Component } from 'react'
import { createStackNavigator, SafeAreaView } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'

const StackNavigator = createStackNavigator({
  LoginScreen,
})

class AuthNavigator extends Component {
  static router = StackNavigator.router

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ horizontal: 'always', top: 'always' }}>
        <StackNavigator navigation={this.props.navigation} />
      </SafeAreaView>
    )
  }
}

export default AuthNavigator