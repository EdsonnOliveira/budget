import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlashMode } from "react-native-camera";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { StackProps } from "../../routes/models";
import { ModeScanner } from "./models";
import View from "./view";

const Scanner: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    const [mode, setMode] = useState<ModeScanner>('camera')
    const [flashMode, setFlashMode] = useState<keyof FlashMode>('off' || 'torch')
    const [scanned, setScanned] = useState<string>('')

    return (
        <Main statusBar={{ barStyle: 'dark-content' }} noMargin bgColor="#282E36">
            <Header title='Escanear Produto' />
            <View
                mode={mode}
                navigation={navigation}
                setMode={setMode}
                flashMode={flashMode}
                setFlashMode={setFlashMode}
                scanned={scanned}
                setScanned={setScanned}
            />
        </Main>
    )
}

export default Scanner;