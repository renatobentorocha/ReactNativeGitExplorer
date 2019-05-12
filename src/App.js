if (__DEV__) {
  import("./config/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

import React, { Component } from "react";
import createNavigator from "./Routes";
import Reactotron from "reactotron-react-native";

export default class App extends Component {
  render() {
    Reactotron.log("Teste");
    const Routes = createNavigator();

    return <Routes />;
  }
}
