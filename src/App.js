// Imports: Dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Imports: Components


// React Native Component
class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
           Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

// Exports
export default App;
