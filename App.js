import { Fumi } from 'react-native-textinput-effects';
import { LinearGradient } from 'expo'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import React from 'react';

import LogoImage from './assets/logo.png'

export default class App extends React.Component {
  state = {
    text: ''
  }

  onChangeText = (inputName, val) => {
    this.setState({ [inputName]: val })
  }

  loginClicked = () => {
    console.log((this.state.username));
  }

  render() {
    return (
      <LinearGradient colors={['#fe5f75', '#fc9842']} style={{ flex: 1 }} locations={[0.25, 1]}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.container}
        >
          <View style={styles.logo}>
            <Image style={{ width: 75, height: 75 }} source={LogoImage} />
          </View>
          <View style={styles.inputView}>
            <Fumi
              {...inputProps}
              onChangeText={val => this.onChangeText('username', val)}
              label={'Username'}
              iconName={'user'}
            />
            <Fumi
              {...inputProps}
              onChangeText={val => this.onChangeText('password', val)}
              label={'Password'}
              iconName={'unlock-alt'}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => { console.log() }}>
              <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

const inputProps = {
  labelStyle: { color: 'white' },
  style: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    borderRadius: 10,
    margin: 5
  },
  iconClass: FontAwesomeIcon,
  iconColor: 'white',
  iconSize: 20,
  autoCapitalize: 'none'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    margin: 5
  },
  logo: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    padding: 10
  },
  button: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});
