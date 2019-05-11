import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native'
import firebase from 'firebase'
import React, { Component } from 'react'

import { apiKey } from '../config/themoviedb'
import { TabBarIcon } from '../components/common/styled'
import ActionButton from '../components/common/ActionButton'
import ModalMovie from '../components/common/ModalMovie'
import MovieDetail from '../components/home/MovieDetail'

import LogoActiveImage from '../assets/home-active.png'
import LogoImage from '../assets/home.png'

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon source={tintColor ? LogoActiveImage : LogoImage} />,
  }

  state = {
    movie: {
      title: '',
      poster_path: '',
      release_date: '',
      overview: '',
      genre_ids: [],
      vote_average: 0,
    },
    onFetching: false,
    isModalVisible: true,
  }

  componentDidMount() {
    this.generateNewMovie()
  }

  generateNewMovie = async () => {
    this.setState({ onFetching: true })
    const randomPage = Math.floor((Math.random() * 359) + 1)
    const randomMovie = Math.floor((Math.random() * 19))
    const { results: movies } = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${randomPage}`).then(res => res.json())
    this.setState({ movie: movies[randomMovie], onFetching: false }, () => console.log(this.state.movie))
  }

  dislike = async () => {
    this.generateNewMovie()
  }

  like = async () => {
    this.generateNewMovie()
    if (!(this.props.screenProps.movieListFromFb.some(movieFb => movieFb.id === this.state.movie.id))) {
      const ref = firebase.database().ref(`users/${firebase.auth().currentUser.uid}/movieList`)
      const key = ref.push().key
      ref.update({ [key]: { key, ...this.state.movie } })
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    const { movie } = this.state

    return (
      <View style={styles.container}>
        <ModalMovie movie={movie} isModalVisible={this.state.isModalVisible} toggleModal={this.toggleModal} />
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <MovieDetail movie={movie} onFetching={this.state.onFetching} />
        </TouchableWithoutFeedback>
        <View style={styles.actionBar}>
          <ActionButton type="dislike" disabled={this.state.onFetching} onPress={this.dislike} />
          <ActionButton type="like" disabled={this.state.onFetching} onPress={this.like} />
        </View>
      </View>
    )
  }
}

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  actionBar: {
    width: dimensions.width,
    paddingLeft: dimensions.width * 0.2,
    paddingRight: dimensions.width * 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
})

export default HomeScreen