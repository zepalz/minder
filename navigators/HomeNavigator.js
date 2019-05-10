import React, { Component } from 'react'
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import UserScreen from '../screens/UserScreen'

const MaterialTopTabNavigator = createMaterialTopTabNavigator({
  HomeScreen,
  UserScreen,
  SearchScreen,
}, {
  tabBarOptions: {
    initialRouteName: 'HomeScreen',
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: 'white'
    },
    showIcon: true,
    showLabel: false,
    activeTintColor: 'active',
    inactiveTintColor: null
  }
})

class TabNavigator extends Component {
  static router = MaterialTopTabNavigator.router

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ horizontal: 'always', top: 'always' }}>
        <MaterialTopTabNavigator navigation={this.props.navigation} />
      </SafeAreaView>
    )
  }
}

export default TabNavigator