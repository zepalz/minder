import { View, Text } from 'react-native'
import React, { Component } from 'react'

import { TabBarIcon } from '../components/common/styled'

import SearchImage from '../assets/search.png'
import SearchActiveImage from '../assets/search-active.png'

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon source={tintColor ? SearchActiveImage : SearchImage} />,
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