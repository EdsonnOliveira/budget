import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Scanner from '../screens/scanner';
import Details from '../screens/details';
import { StackProps } from './models';

const stackRoutes = createNativeStackNavigator<StackProps>();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        initialRouteName='Home'
        screenOptions={{
            gestureEnabled: false,
            headerShown: false,
        }}
    >
        <stackRoutes.Screen name='Home' component={Home} />
        <stackRoutes.Screen name='Scanner' component={Scanner} />
        <stackRoutes.Screen name='Details' component={Details} />
    </stackRoutes.Navigator>
)

export default AppRoutes