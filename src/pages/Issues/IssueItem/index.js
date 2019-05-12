import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

import Reactotron from "reactotron-react-native";

class IssueItem extends Component {
  render() {
    const { data } = this.props;
    const id = data.id;

    return (
      <View style={styles.container} key={id}>
        <View style={styles.repository}>
          <Image source={{ uri: data.user.avatar_url }} style={styles.image} />
          <View style={styles.information}>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {data.title}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {data.user.login}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.issues}
          onPress={() => Linking.openURL(data.html_url)}
        >
          <Icon name="ios-arrow-forward" size={44} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(IssueItem);
