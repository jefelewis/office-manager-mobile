// Imports: Dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Imports: Components


// Imports: Reducers
import reducers from './reducers';


// React Native Component
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
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
