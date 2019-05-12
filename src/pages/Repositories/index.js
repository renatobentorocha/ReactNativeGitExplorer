import React, { Component } from "react";
import { View, FlatList, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-community/async-storage";
import RepositoryItem from "./RepositoryItem";
import Header from "../../components/Header";
import styles from "./styles";
import api from "../../services/api";

export default class Repositories extends Component {
  state = {
    repositoryName: "",
    repositories: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
    this.loadRepositories();
  }

  getRepositories = async () =>
    JSON.parse(await AsyncStorage.getItem("@Githuber:reponame"));

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    try {
      const repositories = await this.getRepositories();

      if (repositories) this.setState({ repositories: [...repositories] });
      else this.setState({ repositories: [] });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loadingList: false,
        refreshing: false
      });
    }
  };

  saveRepository = async repository => {
    this.setState({ repositories: [...this.state.repositories, repository] });

    await AsyncStorage.setItem(
      "@Githuber:reponame",
      JSON.stringify(this.state.repositories)
    );
  };

  handleRepository = async () => {
    const { repositoryName } = this.state;

    try {
      this.setState({ loading: true });

      const { data } = await api.get(`repos/${repositoryName}`);

      const repo = {
        id: data.id,
        avatar_url: data.owner.avatar_url,
        name: data.name,
        organization: data.organization.login
      };

      this.saveRepository(repo);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem data={item} />;

  renderList = () => {
    const { repositories: data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={data => String(data.id)}
        renderItem={this.renderListItem}
        refreshing={refreshing}
        onRefresh={this.loadRepositories}
      />
    );
  };

  render() {
    const { repositoryName } = this.state;

    return (
      <View style={styles.main}>
        <Header title={"Repositories"} />
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeHolder="Adicionar novo repositório"
              value={repositoryName}
              onChangeText={text => this.setState({ repositoryName: text })}
            />
            <Icon
              style={styles.button}
              name="plus"
              size={44}
              onPress={() => this.handleRepository()}
            />
          </View>

          {this.renderList()}
        </View>
      </View>
    );
  }
}
