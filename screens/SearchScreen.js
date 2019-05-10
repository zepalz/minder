import { ListItem, SearchBar } from 'react-native-elements'
import { View, Text, FlatList } from 'react-native'
import React, { Component } from 'react'

import { apiKey, imageBaseUrl } from '../config/themoviedb'
import { TabBarIcon } from '../components/common/styled'
import ActionButton from '../components/common/ActionButton'

import SearchActiveImage from '../assets/search-active.png'
import SearchImage from '../assets/search.png'

class SearchScreen extends Component {
  timer = null
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon source={tintColor ? SearchActiveImage : SearchImage} />,
  }

  state = {
    movies: [],
    defaultMovies: [],
    searching: false,
  }

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    const { results: movies } = await response.json()
    this.setState({ movies })
  }

  renderEmpty = () => (
    <View style={{ margin: 10, alignItems: 'center' }}>
      <Text>
        {this.state.searching ? 'Searching...' : 'No results found'}
      </Text>
    </View>
  )

  renderListItem = ({ item: movie }) => (
    <ListItem
      title={movie.title}
      containerStyle={{ borderBottomWidth: 0 }}
      subtitle={`Score: ${movie.vote_average.toFixed(1).toString()}`}
      leftAvatar={{ source: { uri: imageBaseUrl + '/w200/' + movie.poster_path } }}
      rightIcon={<ActionButton type="like" size={40} onPress={this.like} />}
    />
  )

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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          lightTheme
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.searchText}
        />
        {
          this.state.searching
            ? this.renderEmpty()
            : <FlatList
              keyExtractor={item => item.id.toString()}
              data={this.state.movies}
              renderItem={this.renderListItem}
              ListEmptyComponent={this.renderEmpty()}
            />
        }
      </View>
    )
  }
}

export default SearchScreen