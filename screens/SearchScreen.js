import { View, Text } from 'react-native'
import React, { Component } from 'react'

import { HeaderIcon } from '../components/common/styled'

import LogoImage from '../assets/logo.png'
import SearchActiveImage from '../assets/search-active.png'
import UserImage from '../assets/user.png'

class SearchScreen extends Component {
  static navigationOptions = {
    headerLeft: <HeaderIcon source={UserImage} onPress={() => this.props.navigation.navigate('UserScreen')} />,
    headerTitle: <HeaderIcon source={LogoImage} onPress={() => this.props.navigation.navigate('HomeScreen')}/>,
    headerRight: <HeaderIcon source={SearchActiveImage} />
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View>
        <Text>SEARCH</Text>
      </View>
    )
  }
}

export default SearchScreen