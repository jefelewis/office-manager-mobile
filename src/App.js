// Imports: Dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import { Header } from 'native-base';
import firebaseConfig from '../config/config';

// Imports: Components
// import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
          <Header />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

// Exports
export default App;
