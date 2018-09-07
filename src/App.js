// Imports: Dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import firebaseConfig from '../config/config';

// Imports: Components


// Imports: Reducers
import reducers from './reducers';


// React Native Component
class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

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
