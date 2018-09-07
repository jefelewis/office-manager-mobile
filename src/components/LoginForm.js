// Imports: Dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button,
} from './common';

// Imports: Redux
import { emailChanged } from '../actions';


// React Native Component
class LoginForm extends Component {

  // Field Changes: Email
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  // Render
  render() {
    return (
      <Card style={styles.cardStyle}>
        <CardSection>
          <Input
            label="Email"
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>

      </Card>
    );
  }
}


// Styles
const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
  },
});


// Exports
export default connect(null, { emailChanged })(LoginForm);
