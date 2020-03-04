import React from "react";
import {createSwitchNavigator} from 'react-navigation';

import Login from "../screens/authentication/Login";
import Register from "../screens/authentication/Register";
import ForgotPassword from "../screens/authentication/ForgotPassword";
import TermsAndConditions from "../screens/authentication/TermsAndConditions";


export default AuthStack = createSwitchNavigator({
    Login,
    Register,
    ForgotPassword,
    TermsAndConditions
}, {
    initialRouteName: "Login"
})