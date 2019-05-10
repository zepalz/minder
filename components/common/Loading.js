import React from 'react'
import { View } from 'react-native'
import { BarIndicator } from 'react-native-indicators'

export default ({ transparent }) => (
  <View style={{
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: transparent && 0.8
  }}>
    <BarIndicator animationDuration={500} count={5} size={50} color='#fe5f75' />
  </View>
)