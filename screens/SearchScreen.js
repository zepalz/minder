import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import LogoImage from '../assets/logo.png'

class SearchScreen extends Component {
  static navigationOptions = {
    headerLeft: <Image source={LogoImage} style={{ width: 30, height: 30 }}/>,
    headerTitle: <Image source={LogoImage} style={{ width: 30, height: 30 }}/>,
    headerRight: <Image source={LogoImage} style={{ width: 30, height: 30 }}/>
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