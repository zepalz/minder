import { SearchBar, ListItem } from 'react-native-elements'
import { View, Text, FlatList, Alert } from 'react-native'
import firebase from 'firebase'
import React, { Component } from 'react'

import { apiKey, imageBaseUrl } from '../config/themoviedb'
import ActionButton from '../components/common/ActionButton'
import EmptyItem from '../components/common/EmptyItem'
import ModalMovie from '../components/common/ModalMovie'

class SearchScreen extends Component {
  timer = null

  state = {
    movies: [],
    searching: false,
    isModalVisible: false,
    movie: {}
  }

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    const { results: movies } = await response.json()
    this.setState({ movies })
  }

  updateSearch = searchText => {
    const fetchMyHint = async () => {
      const { results: movies } = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchText}&language=en-US&page=1&include_adult=false`).then(res => res.json())
      this.setState({ movies, searching: false })
    }
    this.setState({ searchText, searching: true }, async () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(fetchMyHint, 1000)
    })
  }

  like = (movie) => {
    Alert.alert(
      'Add ?', `${movie.title} will be add to your movie list.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Add', onPress: () => {
            const ref = firebase.database().ref(`users/${firebase.auth().currentUser.uid}/movieList`)
            const key = ref.push().key
            ref.update({ [key]: { key, ...movie } })
          }
        }
      ]
    )
  }

  toggleModal = (movie = {}) => {
    this.setState({ movie, isModalVisible: !this.state.isModalVisible })
  }

  render() {
    const { movies = [] } = this.props

    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          lightTheme
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.searchText}
        />
        {
          this.state.searching ? <EmptyItem text='Searching...' />
            : <FlatList
              data={this.state.movies}
              keyExtractor={item => item.id.toString()}
              renderItem={
                ({ item: movie }) =>
                  <ListItem
                    onPress={() => this.toggleModal(movie)}
                    title={movie.title}
                    containerStyle={{ borderBottomWidth: 0 }}
                    subtitle={`Score: ${movie.vote_average.toFixed(1).toString()}`}
                    leftAvatar={{ size: 'medium', source: { uri: imageBaseUrl + '/w200/' + movie.poster_path } }}
                    rightElement={!(movies.some(movieFb => movieFb.id === movie.id)) && <ActionButton type="like2" onPress={() => this.like(movie)} size={40} />}
                  />}
              ListEmptyComponent={<EmptyItem />}
            />
        }
        <ModalMovie movie={this.state.movie} isModalVisible={this.state.isModalVisible} toggleModal={this.toggleModal} />
      </View>
    )
  }
}

export default SearchScreen