import { Text, View } from 'react-native';
import firebase from 'firebase'
import React, { Component } from 'react'

import { AlertHelper } from '../common/AlertHelper';
import { BoldText, InputView, StyledTouchableOpacity } from './styled'
import Input from './InputForm'

const inputDetails = [
  { name: 'email', label: 'Email', icon: 'user' },
  { name: 'password', label: 'Password', icon: 'unlock-alt', secureTextEntry: true }
]

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChangeText = (inputName, val) => {
    this.setState({ [inputName]: val })
  }

  loginClicked = async () => {
    const { email, password } = this.state
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      AlertHelper.show('success', 'Success', 'Login succesfully !');
    } catch (error) {
      AlertHelper.show('error', 'Error', error);
    }
  }

  render() {
    return (
      <InputView>
        {inputDetails.map((input, index) => (<Input key={index} input={input} onChangeText={this.onChangeText} />))}
        <StyledTouchableOpacity onPress={this.loginClicked}>
          <BoldText>LOGIN</BoldText>
        </StyledTouchableOpacity>
        <Text>Don't have an account ? <BoldText onPress={this.props.goToRegister}>Register</BoldText></Text>
      </InputView>
    )
  }
}

export default Login