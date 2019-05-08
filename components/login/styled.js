import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components'

export const InputView = styled(View)`
  width: 80%;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const BoldText = styled(Text)`
  font-weight: bold;
`

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  height: 50;
  border-radius: 10;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  background-color: white;
`
