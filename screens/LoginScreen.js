import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DropdownAlert from 'react-native-dropdownalert'
import React from 'react'

import { AlertHelper } from '../components/common/AlertHelper'
import firebase from '../config/firebase'
import Loading from '../components/common/Loading'
import Login from '../components/login/Login'
import Register from '../components/login/Register'

import LogoImage from '../assets/logo.png'

class LoginScreen extends React.Component {
  state = {
    isLogin: true,
  }

  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin })
  }

  render() {
    return (
      <LinearGradient colors={['#fe5f75', '#fc9842']} style={{ flex: 1 }} locations={[0.25, 1]}>
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
          <View style={styles.logo}>
            <Image style={{ width: 75, height: 75 }} source={LogoImage} />
          </View>
          {this.state.isLogin ? <Login goToRegister={this.toggleLogin} /> : <Register goToLogin={this.toggleLogin} />}
        </KeyboardAvoidingView>
        <DropdownAlert ref={(ref) => AlertHelper.setDropDown(ref)} onClose={() => AlertHelper.invokeOnClose()} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: 10,
    marginBottom: 50,
    alignItems: 'center',
  },
})

export default LoginScreen
