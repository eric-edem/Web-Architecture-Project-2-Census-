import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from "../screens/splash/Splash";
import AuthStack from "./AuthStack";
import AppNavigator from "./AppNavigator"
const switchNavigator = createSwitchNavigator({
    Splash,
    AuthStack,
    AppNavigator
}, {
    initialRouteName: "Splash"
})

export default appContainer = createAppContainer(switchNavigator)