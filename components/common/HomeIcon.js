import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  width: 35px;
  height: 35px;
`

const HomeIcon = props => (
  <View style={props.style}>
    <StyledImage source={props.source}/>
  </View>
)

export default HomeIcon