import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'

import HeaderIcon from '../components/common/HomeIcon'

import UserActiveImage from '../assets/user-active.png'
import UserImage from '../assets/user.png'

class UserScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <HeaderIcon source={tintColor ? UserActiveImage : UserImage} />,
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text>PROFILE</Text>
      </View>
    )
  }
}

export default UserScreen