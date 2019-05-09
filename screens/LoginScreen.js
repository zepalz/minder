import { LinearGradient } from 'expo'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import React from 'react';

import { AlertHelper } from '../components/common/AlertHelper';
import firebase from '../config/firebase'
import Loading from '../components/common/Loading'
import Login from '../components/login/Login'
import Register from '../components/login/Register'

import LogoImage from '../assets/logo-active.png'

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    isLogin: true,
    isLoading: true
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.props.navigation.navigate('HomeNavigator') : this.setState({ isLoading: false })
    })
  }

  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin })
  }

  render() {
    return (
      <LinearGradient colors={['#fe5f75', '#fc9842']} style={{ flex: 1 }} locations={[0.25, 1]}>
        {
          this.state.isLoading
            ? <Loading />
            :
            <KeyboardAvoidingView
              behavior="padding"
              enabled
              style={styles.container}
            >
              <View style={styles.logo}>
                <Image style={{ width: 75, height: 75 }} source={LogoImage} />
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>MINDER</Text>
              </View>
              {this.state.isLogin ? <Login goToRegister={this.toggleLogin} /> : <Register goToLogin={this.toggleLogin} />}
            </KeyboardAvoidingView>
        }
        <DropdownAlert
          ref={ref => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
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
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 40,
    alignItems: 'center',
  },
});

export default LoginScreen
