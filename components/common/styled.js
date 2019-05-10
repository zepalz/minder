import { StyleSheet, Image } from 'react-native'
import styled from 'styled-components'

export const TabBarIcon = styled(Image)`
  width: 35px;
  height: 35px;
`

export default StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
})