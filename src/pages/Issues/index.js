import React, { Component } from "react";
import { View, FlatList, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-community/async-storage";
import IssueItem from "./IssueItem";
import Header from "../../components/Header";
import styles from "./styles";
import api from "../../services/api";
import Filter from "../../components/Filter";

export default class Issues extends Component {
  state = {
    data: [],
    loading: true,
    refreshing: false,
    activeFilter: "all"
  };

  handleRepository = async () => {
    const { navigation } = this.props;
    const { id } = navigation.getParam("id", "");

    try {
      this.setState({ loading: true });

      const { data } = await api.get(`repositories/${id}/issues`);
      this.setState({ data });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.handleRepository();
  }

  renderListItem = ({ item }) => <IssueItem data={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={data => String(data.id)}
        renderItem={this.renderListItem}
        refreshing={refreshing}
      />
    );
  };

  changeFilter = async value => {
    this.setState({ activeFilter: value });

    const { navigation } = this.props;
    const { id } = navigation.getParam("id", "");

    try {
      const uri = `/repositories/${id}/issues?state=${value}`;

      console.log(navigation);
      console.log(uri);

      const { data } = await api.get(uri);

      console.log(data);
      this.setState({ data });
    } catch (_err) {
      console.log(_err);
      this.setState({ error: "Erro ao recuperar as Issues" });
    }
  };

  render() {
    const { activeFilter } = this.state;
    const { navigation } = this.props;
    const { name } = navigation.getParam("name", "Issues");

    return (
      <View style={styles.main}>
        <Header title={name} />
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />
        <View style={styles.container}>{this.renderList()}</View>
      </View>
    );
  }
}
