import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import React from 'react'

import { imageBaseUrl } from '../../config/themoviedb'
import { StyledImageBg, MovieView, WhiteText as Text } from './styled'
import genres from '../../utils/genres'
import Loading from '../common/Loading'
import styles from '../common/styled'

const MovieDetail = ({ movie, onFetching }) => (
  <StyledImageBg
    source={{ uri: imageBaseUrl + '/w500/' + movie.poster_path }}
    style={styles.shadow}
    imageStyle={{ borderRadius: 10 }}
  >
    {onFetching ? (
      <Loading transparent animate />
    ) : (
      <LinearGradient style={{ borderRadius: 10 }} colors={['transparent', 'black']} location={[0.1, 1]}>
        <MovieView>
          <View style={{ flex: 1 }}>
            <Text>
              <Text size='l' bold>
                {movie.title}
              </Text>
              , <Text size='m'>{new Date(movie.release_date).getFullYear()}</Text>
            </Text>
            <Text>
              {movie.genre_ids.map((genre_id, index) => (
                <Text key={index}>{genres[genre_id]} </Text>
              ))}
            </Text>
          </View>
          <Text size='xl' bold>
            {movie.vote_average.toFixed(1)}
          </Text>
        </MovieView>
      </LinearGradient>
    )}
  </StyledImageBg>
)

export default MovieDetail
