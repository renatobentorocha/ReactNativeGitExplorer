import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

import Reactotron from "reactotron-react-native";

class RepositoryItem extends Component {
  handleIssues = async (name, id, full_name) => {
    const { navigate } = this.props.navigation;
    await navigate("Issues", { name, id, full_name });
  };

  render() {
    const { data } = this.props;
    const id = data.id;
    const full_name = data.full_name;
    const name = data.name;

    return (
      <View style={styles.container} key={id}>
        <View style={styles.repository}>
          <Image source={{ uri: data.avatar_url }} style={styles.image} />
          <View style={styles.information}>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {data.organization}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.issues}
          onPress={() => this.handleIssues({ name }, { id }, { full_name })}
        >
          <Icon name="ios-arrow-forward" size={44} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(RepositoryItem);
