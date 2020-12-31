import { BarIndicator } from 'react-native-indicators'
import { View, Image } from 'react-native'
import React from 'react'

import LogoIcon from '../../assets/logo.png'

export default ({ transparent, animate }) => (
  <View style={{
    height: '100%',
    width: '100%',
    backgroundColor: transparent ? 'rgba(255,255,255,0.5)' : 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {animate ? <BarIndicator animationDuration={500} count={5} size={50} color='#fe5f75' />
      : <Image source={LogoIcon} style={{ width: 75, height: 75 }} />}
  </View>
)
