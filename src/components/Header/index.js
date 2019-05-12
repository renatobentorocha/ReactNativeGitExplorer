import React, { Component } from "react";
import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.left} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => {}} />
      </View>
    );
  }
}
