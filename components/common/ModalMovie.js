import { Icon } from 'react-native-elements'
import { StyleSheet, Button, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import Modal from 'react-native-modal'
import React from 'react'

import { imageBaseUrl } from '../../config/themoviedb'
import genres from '../../utils/genres'

const dimensions = Dimensions.get('window')

export default ({ movie, isModalVisible, toggleModal }) => (
  <Modal
    propagateSwipe
    isVisible={isModalVisible}
    onBackButtonPress={toggleModal}
    onBackdropPress={toggleModal}
    style={styles.alignItemCenter}
  >
    <ScrollView style={styles.container}>
      <View style={styles.alignItemCenter}>
        <Text style={styles.title}>{movie.title}</Text>
        <Image source={{ uri: imageBaseUrl + '/w500/' + movie.poster_path }} style={styles.image} />
      </View>
      <View style={styles.detailView}>
        <View style={styles.row}>
          <Icon name='star' type='font-awesome' />
          <Text style={styles.textRow}>{movie.vote_average && movie.vote_average.toFixed(1).toString()}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Icon name='calendar' type='font-awesome' />
          <Text style={styles.textRow}>{movie.release_date}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Icon name='tags' type='font-awesome' />
          <Text style={styles.textRow}>
            {movie.genre_ids && movie.genre_ids.map((genre_id, index) => <Text key={index}>{genres[genre_id]} </Text>)}
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Icon name='book' type='font-awesome' />
          <Text style={styles.textRow}>{movie.overview}</Text>
        </View>
      </View>
    </ScrollView>
  </Modal>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: dimensions.width * 0.8,
    height: dimensions.height * 0.8,
  },
  alignItemCenter: {
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
  },
  image: {
    width: dimensions.width * 0.6,
    height: Math.round((dimensions.width * 3) / 2) * 0.6,
  },
  detailView: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    margin: 5,
  },
  textRow: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
    margin: 10,
  },
})
