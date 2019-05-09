import { View, Text, ImageBackground, Button, Dimensions } from 'react-native'
import React, { Component } from 'react'

import { apiKey, imageBaseUrl } from '../config/themoviedb'
import HeaderIcon from '../components/common/HomeIcon'
import genres from '../utils/genres'

import LogoImage from '../assets/logo.png'
import LogoActiveImage from '../assets/logo-active.png'

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <HeaderIcon source={tintColor ? LogoActiveImage : LogoImage} />,
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
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${randomPage}`)
    const { results: movies } = await response.json()
    this.setState({ movie: movies[randomMovie] }, () => console.log(this.state.movie))
  }

  render() {
    const { movie } = this.state
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 3 / 2);
    const imageWidth = dimensions.width;

    return (
      <View>
        <ImageBackground source={{ uri: imageBaseUrl + movie.poster_path }} style={{ width: imageWidth * 0.85, height: imageHeight * 0.85 }}>
          <Text>HELLO</Text>
        </ImageBackground>
        <Button title="LIKE" onPress={this.generateNewMovie} />
        <Text>Title: {movie.title}</Text>
        <Text>Genres: {movie.genre_ids && movie.genre_ids.map((genre_id, index) => <Text key={index}>{genres[genre_id]}</Text>)}</Text>
        <Text>Score: {movie.vote_average}</Text>
        <Text>Overview: {movie.overview}</Text>
        <Text>Release Date: {movie.release_date}</Text>
      </View>
    )
  }
}

export default HomeScreen