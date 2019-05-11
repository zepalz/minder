import { Text, View } from 'react-native'
import React from 'react'

const EmptyItem = ({ text }) => (
  <View style={{ margin: 10, alignItems: 'center' }}>
    <Text>
      {text ? text : 'No results found'}
    </Text>
  </View>
)

export default EmptyItem