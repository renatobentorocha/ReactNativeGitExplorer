import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { colors } from "./styles";
import Repositories from "./pages/Repositories";
import Issues from "./pages/Issues";

const Routes = () =>
  createAppContainer(
    createSwitchNavigator({
      Repositories,
      Issues
    })
  );

export default Routes;
