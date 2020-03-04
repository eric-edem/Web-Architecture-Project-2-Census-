import React from "react";
import {Text} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";

import MeterDetails from "../screens/app/census/CensusForm";
import MeterImage from "../screens/app/census/MeterImage";
import MeterInformation from "../screens/app/census/MeterInformation";

export default MeterNavigator = createStackNavigator({
    CensusForm: MeterDetails,
    MeterImage,
    MeterInformation    
}, {
    tabBarIcon: () => <Text>2332</Text>,
    initialRouteName: "CensusForm"
});