import { View, Text, ImageBackground, Dimensions } from 'react-native'
import styled from 'styled-components'

const dimensions = Dimensions.get('window');
const fontSize = {
  s: 12,
  m: 18,
  l: 24,
  xl: 30
}

export const StyledImageBg = styled(ImageBackground)`
  width: ${dimensions.width * 0.85};
  height: ${Math.round(dimensions.width * 3 / 2) * 0.85};
  justify-content: flex-end;
  margin: 10px;
`

export const MovieView = styled(View)`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const WhiteText = styled(Text)`
  color: white;
  font-weight: ${props => props.bold ? 'bold': 'normal'};
  font-size: ${props => props.size ? fontSize[props.size] : 14};
`
