import { TouchableHighlight, Image, StyleSheet } from 'react-native'
import React from 'react'

import LikeIcon from '../../assets/like.png'
import DislikeIcon from '../../assets/dislike.png'
import styles from './styled'

const ActionButton = props => (
  <TouchableHighlight style={{ ...styles.shadow, borderRadius: 40 }} {...props}>
    <Image source={props.type === 'like' ? LikeIcon : DislikeIcon} style={{ width: 60, height: 60 }} />
  </TouchableHighlight>
)

export default ActionButton