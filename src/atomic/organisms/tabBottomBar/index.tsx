import React, { useEffect, useState } from "react";

import Button from "../../atoms/button";
import Home from '../../../assets/icons/home.png'
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
            <Button type='ghostSmall' text={Home} onPress={() => navigation.navigate('Home')} marker={screenSelected == 'home' ?? false} flex />
            <Button type='ghostSmall' text={Home} onPress={() => null} marker={screenSelected == 'sales' ?? false} flex />
            <Button type='hexagonGradientMedium' text={Scanner} onPress={() => navigation.navigate('Scanner')} mt='-30px' />
            <Button type='ghostSmall' text={Home} onPress={() => null} marker={screenSelected == 'products' ?? false} flex />
            <Button type='ghostSmall' text={Home} onPress={() => null} marker={screenSelected == 'configurations' ?? false} flex />
        </Main>
    )
}

export default TabBottomBar;