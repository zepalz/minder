import { TouchableHighlight, Image } from 'react-native'
import React from 'react'

import LikeIcon from '../../assets/like.png'
import Like2Icon from '../../assets/like2.png'
import DislikeIcon from '../../assets/dislike.png'
import styles from './styled'

const type = {
  like: LikeIcon,
  like2: Like2Icon,
  dislike: DislikeIcon
}

const ActionButton = props => (
  <TouchableHighlight style={{ ...styles.shadow, borderRadius: 40 }} {...props}>
    <Image
      source={type[props.type]}
      style={props.size ? { width: props.size, height: props.size } : { width: 60, height: 60 }}
    />
  </TouchableHighlight>
)

export default ActionButton