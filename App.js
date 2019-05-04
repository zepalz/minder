import { LinearGradient } from 'expo'
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import styled from 'styled-components'
import LogoImage from './assets/logo.png'

const Logo = styled.View`
  border-radius: 5;
  background-color: 'white';
  padding: 20;
`

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#fe5f75', '#fc9842']} style={{ flex: 1 }} locations={[0.25, 1]}>
        <View style={styles.container}>
          <Logo>
            <Image style={{ width: 100, height: 100 }} source={LogoImage} />
          </Logo>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});
