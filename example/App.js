/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import EmptyStateView from '@twotalltotems/react-native-empty-state';

export default class App extends React.Component {
  render() {
    const data = [];
    const renderEmptyStateView = () => (
      <EmptyStateView
        imageSource={{
          uri: 'https://i.ibb.co/Fs3mhQW/group.png',
        }}
        imageStyle={styles.imageStyle}
        headerText="Turn on location permission"
        subHeaderText="Please turn on the location permission to see the charging stations near me. "
        buttonText="Go to Settings"
        buttonStyle={styles.buttonStyle}
        headerTextStyle={styles.headerTextStyle}
        subHeaderTextStyle={styles.subHeaderTextStyle}
        buttonTextStyle={styles.buttonTextStyle}
      />
    );
    return (
      <View style={{flex: 1, height: '100%'}}>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={data}
          ListEmptyComponent={renderEmptyStateView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTextStyle: {
    color: 'rgb(76, 76, 76)',
    fontSize: 18,
    marginVertical: 10,
  },
  imageStyle: {
    height: '15%',
    resizeMode: 'contain',
  },
  subHeaderTextStyle: {
    fontSize: 12,
    color: 'rgb(147, 147, 147)',
    paddingHorizontal: 60,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonStyle: {
    borderColor: 'rgb(0, 27, 72)',
    backgroundColor: 'rgb(0, 27, 72)',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 70,
    paddingVertical: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    textDecorationLine: 'none',
  },
});
