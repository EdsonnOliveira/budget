import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Scanner from '../screens/scanner';

import Details from '../screens/details';
import Finished from '../screens/details/finish';
import DetailsModify from '../screens/details/modify';

import Products from '../screens/products';
import ProductsAdd from '../screens/products/add';
import ProductsModify from '../screens/products/modify';

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
        <stackRoutes.Screen name='DetailsModify' component={DetailsModify} />
        <stackRoutes.Screen name='DetailsFinished' component={Finished} />

        <stackRoutes.Screen name='Products' component={Products} />
        <stackRoutes.Screen name='ProductsAdd' component={ProductsAdd} />
        <stackRoutes.Screen name='ProductsModify' component={ProductsModify} />
    </stackRoutes.Navigator>
)

export default AppRoutes