// Imports: Dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


// React Native Component
class LoginForm extends Component {
  componentWillMount() {
    console.log('Login Form Mounted');
  }

  render() {
    return (
      <Card style={styles.cardStyle}>
        <CardSection>
          <Input
            label="Email"
            placeholder="Email"
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
export default LoginForm;
