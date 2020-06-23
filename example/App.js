/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import EmptyStateView from 'react-native-empty-state';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <EmptyStateView
            imageSource={require('./assets/emptyImage.png')}
            headerText="You have Nothing"
            subHeaderText="Please add more content"
            buttonText="Next"
          />
        </SafeAreaView>
      </>
    );
  }
}
