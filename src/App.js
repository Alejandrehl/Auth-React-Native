import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import Header from  './components/common/Header';
import LoginForm from './components/LoginForm';

export default class App extends Component<{}> {
	componentWillMount(){
		firebase.initializeApp({
		    apiKey: 'AIzaSyCRYDm_qPsFokFGRXARg1T2Kwsk0IIZ5-I',
		    authDomain: 'authentication-4b6d7.firebaseapp.com',
		    databaseURL: 'https://authentication-4b6d7.firebaseio.com',
		    projectId: 'authentication-4b6d7',
		    storageBucket: 'authentication-4b6d7.appspot.com',
		    messagingSenderId: '854033380363'
  		});
	}

  render() {
    return (
      <View>
      	<Header headerText="Authentication"/>
      	<LoginForm/>
      </View>
    );
  }
}