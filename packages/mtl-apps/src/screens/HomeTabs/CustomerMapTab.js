import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

export default class CustomerMapTabScreen extends Component {
  constructor (...arg) {
    super(...arg);

    this.state = {};
  }

  render () {
    return (
      <ScrollView>
        <Text>{'工作圈'}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});