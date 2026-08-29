import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BuyerTabParamList } from './types';

import OrdersScreen from '../screens/buyer/OrderScreen';
import HomeScreen from '../screens/buyer/HomeScreen';
import SearchScreen from '../screens/buyer/SearchScreen';
import VRideScreen from '../screens/buyer/VRideScreen';
import AccountScreen from '../screens/shared/AccountScreen';

const Tab = createBottomTabNavigator<BuyerTabParamList>();

export const BuyerTabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="VRide" component={VRideScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
);