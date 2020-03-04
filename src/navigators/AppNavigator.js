import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

import MeterNavigator from "./CensusNavigator";
import Settings from "../screens/app/Settings";
import Notifications from '../screens/app/Notifications'

export default AppNavigator = createBottomTabNavigator({
    Census: MeterNavigator,
    Settings,
    Notifications
}, {
    initialRouteName: "Census"
});
