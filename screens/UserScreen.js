import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'

import { HeaderIcon } from '../components/common/styled'

import LogoImage from '../assets/logo.png'
import SearchImage from '../assets/search.png'
import UserActiveImage from '../assets/user-active.png'

class UserScreen extends Component {
  static navigationOptions = {
    headerLeft: <HeaderIcon source={UserActiveImage} />,
    headerTitle: <HeaderIcon source={LogoImage} onPress={() => this.props.navigation.navigate('HomeScreen')}/>,
    headerRight: <HeaderIcon source={SearchImage} onPress={() => this.props.navigation.navigate('SearchScreen')} />
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