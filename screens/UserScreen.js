import { ListItem, Button } from 'react-native-elements'
import { View, Text, FlatList, Alert } from 'react-native'
import firebase from 'firebase'
import React, { Component } from 'react'

import { imageBaseUrl } from '../config/themoviedb'
import ActionButton from '../components/common/ActionButton'
import EmptyItem from '../components/common/EmptyItem'
import ModalMovie from '../components/common/ModalMovie'

class UserScreen extends Component {
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
    const { movies } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{`${this.state.user.displayName}'S`} MOVIE LIST</Text>
        </View>
        <FlatList
          data={movies}
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