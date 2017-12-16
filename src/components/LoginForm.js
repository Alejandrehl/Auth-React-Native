import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

export default class LoginForm extends Component<{}> {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email" 
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}