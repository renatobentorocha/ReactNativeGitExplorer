import Reactotron from "reactotron-react-native";

Reactotron.configure({ host: "127.0.0.1", port: 9090 }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
