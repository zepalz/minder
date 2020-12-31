import { SafeAreaView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DropdownAlert from 'react-native-dropdownalert'
import firebase from 'firebase'
import React, { Component } from 'react'

import { AlertHelper } from '../components/common/AlertHelper'
import HomeScreen from '../screens/HomeScreen'
import Loading from '../components/common/Loading'
import SearchScreen from '../screens/SearchScreen'
import UserScreen from '../screens/UserScreen'
import { TabBarIcon } from '../components/common/styled'

import UserActiveImage from '../assets/user-active.png'
import UserImage from '../assets/user.png'
import LogoActiveImage from '../assets/home-active.png'
import LogoImage from '../assets/home.png'
import SearchActiveImage from '../assets/search-active.png'
import SearchImage from '../assets/search.png'

const Tab = createBottomTabNavigator()

class HomeNavigator extends Component {
  state = {
    movieListFromFb: [],
    onFetch: true,
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`/users/${firebase.auth().currentUser.uid}`)
      .on('value', (snapshot) => {
        this.setState({
          movieListFromFb: Object.values(snapshot.val().movieList || []),
          onFetch: false,
        })
      })
  }

  render() {
    return (
      <>
        {this.state.onFetch ? (
          <Loading transparent />
        ) : (
          <Tab.Navigator
            initialRouteName='HomeScreen'
            tabBarOptions={{
              style: {
                backgroundColor: 'white',
              },
              indicatorStyle: {
                backgroundColor: 'white',
              },
              showIcon: true,
              showLabel: false,
              activeTintColor: 'active',
              inactiveTintColor: null,
            }}
          >
            <Tab.Screen
              name='UserScreen'
              options={{
                tabBarIcon: ({ focused }) => <TabBarIcon source={focused ? UserActiveImage : UserImage} />,
              }}
            >
              {() => <UserScreen movies={this.state.movieListFromFb} />}
            </Tab.Screen>
            <Tab.Screen
              name='HomeScreen'
              options={{
                tabBarIcon: ({ focused }) => <TabBarIcon source={focused ? LogoActiveImage : LogoImage} />,
              }}
            >
              {() => <HomeScreen movies={this.state.movieListFromFb} />}
            </Tab.Screen>
            <Tab.Screen
              name='SearchScreen'
              options={{
                tabBarIcon: ({ focused }) => <TabBarIcon source={focused ? SearchActiveImage : SearchImage} />,
              }}
            >
              {() => <SearchScreen movies={this.state.movieListFromFb} />}
            </Tab.Screen>
          </Tab.Navigator>
        )}
        <DropdownAlert ref={(ref) => AlertHelper.setDropDown(ref)} onClose={() => AlertHelper.invokeOnClose()} />
      </>
    )
  }
}

export default HomeNavigator
