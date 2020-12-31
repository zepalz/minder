import React, { useEffect, useState } from 'react'
import firebase from './config/firebase'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import HomeNavigator from './navigators/HomeNavigator'
import LoginScreen from './screens/LoginScreen'
import Loading from './components/common/Loading'
import { SafeAreaView } from 'react-navigation'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoading(false)
      setIsLogin(user)
    })
  })

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ horizontal: 'always', top: 'always' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='AuthNavigator'>
          {isLoading ? (
            <Loading />
          ) : isLogin ? (
            <Stack.Screen name='HomeNavigator' component={HomeNavigator} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name='AuthNavigator' component={LoginScreen} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
