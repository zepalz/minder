import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'

import { TabBarIcon } from '../components/common/styled'

import UserActiveImage from '../assets/user-active.png'
import UserImage from '../assets/user.png'

class UserScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon source={tintColor ? UserActiveImage : UserImage} />,
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