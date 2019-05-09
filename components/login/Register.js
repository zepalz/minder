import { Text, View } from 'react-native';
import React, { Component } from 'react'
import validator from 'validator'

import { AlertHelper } from '../common/AlertHelper';
import { BoldText, InputView, StyledTouchableOpacity } from './styled'
import firebase from '../../config/firebase'
import Input from './InputForm'

const inputDetails = [
  { name: 'email', label: 'Email', icon: 'user' },
  { name: 'confirmPassword', label: 'Confirm Password', icon: 'unlock-alt', secureTextEntry: true },
  { name: 'password', label: 'Password', icon: 'unlock-alt', secureTextEntry: true }
]

class Register extends Component {
  onChangeText = (inputName, val) => {
    this.setState({ [inputName]: val })
  }

  registerClicked = async () => {
    const { email, password, confirmPassword } = this.state
    if (!validator.isEmail(email)) {
      AlertHelper.show('error', 'Error', 'Not valid email !')
      return
    }
    else if (password !== confirmPassword) {
      AlertHelper.show('error', 'Error', 'Password doesn&apos;t match')
      return
    }
    try {
      let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(user);
      await firebase.database().ref('users').push({ email })
      this.props.goToLogin()
    }
    catch (error) {
      AlertHelper.show('error', 'Error', error);
    }
  }

  render() {
    return (
      <InputView>
        {inputDetails.map((input, index) => (<Input key={index} input={input} onChangeText={this.onChangeText} />))}
        <StyledTouchableOpacity onPress={this.registerClicked}>
          <BoldText>REGISTER</BoldText>
        </StyledTouchableOpacity>
        <Text>Already have account ? <BoldText onPress={this.props.goToLogin}>Sign In</BoldText></Text>
      </InputView>
    )
  }
}

export default Register