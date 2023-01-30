import React, { useEffect, useState } from "react";

import Button from "../../atoms/button";

import HomeB from '../../../assets/icons/HomeB.png'
import HomeW from '../../../assets/icons/HomeW.png'
import MoneyB from '../../../assets/icons/MoneyB.png'
import MoneyW from '../../../assets/icons/MoneyW.png'
import ProductB from '../../../assets/icons/ProductB.png'
import ProductW from '../../../assets/icons/ProductW.png'
import UserB from '../../../assets/icons/UserB.png'
import UserW from '../../../assets/icons/UserW.png'

import Scanner from '../../../assets/icons/scanner.png'

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackProps } from "../../../routes/models";

import { Main } from './style'
import { IndexProps } from "./models";

const TabBottomBar: React.FC<IndexProps> = ({
    screenSelected
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    return (
        <Main>
            <Button type='ghostSmall' text={screenSelected == 'home' ? HomeB : HomeW} onPress={() => navigation.navigate('Home')} marker={screenSelected == 'home' ?? false} flex />
            <Button type='ghostSmall' text={screenSelected == 'sales' ? MoneyB : MoneyW} onPress={() => null} marker={screenSelected == 'sales' ?? false} flex />
            <Button type='hexagonGradientMedium' text={Scanner} onPress={() => navigation.navigate('Scanner')} mt='-30px' />
            <Button type='ghostSmall' text={screenSelected == 'products' ? ProductB : ProductW} onPress={() => navigation.navigate('Products')} marker={screenSelected == 'products' ?? false} flex />
            <Button type='ghostSmall' text={screenSelected == 'configurations' ? UserB : UserW} onPress={() => null} marker={screenSelected == 'configurations' ?? false} flex />
        </Main>
    )
}

export default TabBottomBar;