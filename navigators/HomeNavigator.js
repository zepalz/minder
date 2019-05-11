import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation'
import DropdownAlert from 'react-native-dropdownalert';
import firebase from 'firebase'
import React, { Component } from 'react'

import { AlertHelper } from '../components/common/AlertHelper';
import HomeScreen from '../screens/HomeScreen'
import Loading from '../components/common/Loading'
import SearchScreen from '../screens/SearchScreen'
import UserScreen from '../screens/UserScreen'

const MaterialTopTabNavigator = createMaterialTopTabNavigator({
  UserScreen,
  HomeScreen,
  SearchScreen,
}, {
    initialRouteName: 'HomeScreen',
    tabBarOptions: {
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

class HomeNavigator extends Component {
  static router = MaterialTopTabNavigator.router

  state = {
    movieListFromFb: [],
    onFetch: true
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`/users/${firebase.auth().currentUser.uid}`)
      .on('value', snapshot => {
        this.setState({
          movieListFromFb: Object.values(snapshot.val().movieList || []) ,
          onFetch: false
        })
      });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ horizontal: 'always', top: 'always' }}>
        {
          this.state.onFetch ? <Loading transparent />
            : <MaterialTopTabNavigator navigation={this.props.navigation} screenProps={{ movieListFromFb: this.state.movieListFromFb }} />
        }
        <DropdownAlert
          ref={ref => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </SafeAreaView>
    )
  }
}

export default HomeNavigator