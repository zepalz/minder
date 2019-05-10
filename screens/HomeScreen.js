import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React, { Component } from 'react'

import { apiKey } from '../config/themoviedb'
import { TabBarIcon } from '../components/common/styled'
import ActionButton from '../components/common/ActionButton'

import MovieDetail from '../components/home/MovieDetail'
import LogoActiveImage from '../assets/logo-active.png'
import LogoImage from '../assets/logo.png'

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
  }

  render() {
    const { movie } = this.state

    return (
      <View style={styles.container}>
        <MovieDetail movie={movie} onFetching={this.state.onFetching} />
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