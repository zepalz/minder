import { ListItem, Button } from 'react-native-elements'
import { View, Text, FlatList, Alert } from 'react-native'
import firebase from 'firebase'
import React, { Component } from 'react'

import { imageBaseUrl } from '../config/themoviedb'
import { TabBarIcon } from '../components/common/styled'
import ActionButton from '../components/common/ActionButton'
import EmptyItem from '../components/common/EmptyItem'
import ModalMovie from '../components/common/ModalMovie'

import UserActiveImage from '../assets/user-active.png'
import UserImage from '../assets/user.png'

class UserScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon source={tintColor ? UserActiveImage : UserImage} />,
  }

  state = {
    user: firebase.auth().currentUser,
    movie: {}
  }

  signOut = async () => {
    Alert.alert(
      'Are you sure ?', 'Logged out.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout', onPress: () => {
            firebase.auth().signOut()
            this.props.navigation.navigate('AuthNavigator')
          }
        }
      ]
    )
  }

  unlike = (movieTitle, movieKey) => {
    Alert.alert(
      'Are you sure ?', `${movieTitle} will be delete from your movie list.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete', onPress: () => {
            firebase.database().ref(`/users/${this.state.user.uid}/movieList/${movieKey}`).remove()
          }
        }
      ]
    )
  }

  toggleModal = (movie = {}) => {
    this.setState({ movie, isModalVisible: !this.state.isModalVisible })
  }

  render() {
    const { movieListFromFb } = this.props.screenProps

    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{`${this.state.user.displayName}'S`} MOVIE LIST</Text>
        </View>
        <FlatList
          data={movieListFromFb}
          keyExtractor={item => item.id.toString()}
          renderItem={
            ({ item: movie }) =>
              <ListItem
                onPress={() => this.toggleModal(movie)}
                title={movie.title}
                containerStyle={{ borderBottomWidth: 0 }}
                subtitle={`Score: ${movie.vote_average.toFixed(1).toString()}`}
                leftAvatar={{ size: 'medium', source: { uri: imageBaseUrl + '/w200/' + movie.poster_path } }}
                rightElement={<ActionButton type="dislike" onPress={() => this.unlike(movie.title, movie.key)} size={40} />}
              />}
          ListEmptyComponent={<EmptyItem />}
        />
        <Button buttonStyle={{ backgroundColor: '#fe5f75' }} onPress={this.signOut} title="LOGOUT" />
        <ModalMovie movie={this.state.movie} isModalVisible={this.state.isModalVisible} toggleModal={this.toggleModal} />
      </View>
    )
  }
}

export default UserScreen