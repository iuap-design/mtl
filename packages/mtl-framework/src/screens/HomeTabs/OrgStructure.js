import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

export default class OrgStructureTabScreen extends Component {
  constructor (...arg) {
    super(...arg);

    this.state = {};
  }

  render () {
    return (
      <ScrollView>
        <Text>{'通讯录'}</Text>
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