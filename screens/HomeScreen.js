import { View, Text, Image, Button } from 'react-native'
import React, { Component } from 'react'

import { apiKey, imageBaseUrl } from '../config/themoviedb'
import genres from '../utils/genres'

import LogoImage from '../assets/logo.png'

class HomeScreen extends Component {
  static navigationOptions = {
    headerLeft: <Image source={LogoImage} style={{ width: 30, height: 30 }} />,
    headerTitle: <Image source={LogoImage} style={{ width: 30, height: 30 }} />,
    headerRight: <Image source={LogoImage} style={{ width: 30, height: 30 }} />
  }

  state = {
    movie: {}
  }

  componentDidMount() {
    this.generateNewMovie()
  }

  generateNewMovie = async () => {
    const randomPage = Math.floor((Math.random() * 359) + 1)
    const randomMovie = Math.floor((Math.random() * 19))
    console.log(randomPage, ' ', randomMovie);
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${randomPage}`)
    const { results: movies } = await response.json()
    this.setState({ movie: movies[randomMovie] }, () => console.log(this.state.movie))
  }

  render() {
    const { movie } = this.state
    console.log(movie.genre_ids);
    
    return (
      <View>
        <Image source={{ uri: imageBaseUrl + movie.poster_path }} style={{ width: 200, height: 300 }} />
        <Text>Title: {movie.title}</Text>
        <Text>Genres: {movie.genre_ids && movie.genre_ids.map((genre_id, index) => <Text key={index}>{genres[genre_id]}</Text>)}</Text>
        <Text>Score: {movie.vote_average}</Text>
        <Text>Overview: {movie.overview}</Text>
        <Text>Release Date: {movie.release_date}</Text>
        <Button title="LIKE" onPress={this.generateNewMovie} />
      </View>
    )
  }
}

export default HomeScreen