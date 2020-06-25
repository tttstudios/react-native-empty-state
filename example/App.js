/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import EmptyStateView from 'react-native-empty-state';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, height: '100%'}}>
        <EmptyStateView
          imageSource={{
            uri:
              'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
          }}
          imageStyle={{marginHorizontal: 30}}
          headerText="You have nothing"
          subHeaderText="Please add more content"
          buttonText="Next"
          onButtonClick={() => {
            console.log('Button Click');
          }}
        />
      </View>
    );
  }
}
