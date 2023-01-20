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
            gestureEnabled: true,
            headerShown: false,
        }}
    >
        <stackRoutes.Screen name='Home' component={Home} options={{ gestureEnabled: false }} />

        <stackRoutes.Screen name='Scanner' component={Scanner} options={{ gestureEnabled: true }} />

        <stackRoutes.Screen name='Details' component={Details} options={{ gestureEnabled: false }} />
        <stackRoutes.Screen name='DetailsModify' component={DetailsModify} options={{ gestureEnabled: true }} />
        <stackRoutes.Screen name='DetailsFinished' component={Finished} options={{ gestureEnabled: false }} />

        <stackRoutes.Screen name='Products' component={Products} options={{ gestureEnabled: false }} />
        <stackRoutes.Screen name='ProductsAdd' component={ProductsAdd} options={{ gestureEnabled: true }} />
        <stackRoutes.Screen name='ProductsModify' component={ProductsModify} options={{ gestureEnabled: true }} />
    </stackRoutes.Navigator>
)

export default AppRoutes