import React from "react";

import Button from "../../atomic/atoms/button";
import Container from "../../atomic/atoms/container";
import Input from "../../atomic/atoms/input";
import BoxColumn from "../../atomic/atoms/boxes/column";
import BoxCard from "../../atomic/atoms/boxes/boxCard";
import BoxCommon from "../../atomic/atoms/boxes/boxCommon";

import Camera from '../../assets/icons/camera.png'
import Manual from '../../assets/icons/keyboard.png'
import Lightning from '../../assets/icons/lightning.png'
import Scan from '../../assets/icons/scanner.png'
import Arrow from '../../assets/icons/arrow-right.png'

import { CameraProps, ManuelProps, ViewProps } from "./models";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackProps } from "../../routes/models";

const View: React.FC<ViewProps> = ({
    mode,
    setMode
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    return (
        <Container alignItems='center' justifyContent='space-between'>
            {
                mode == 'camera'
                ? <ModeCamera setMode={setMode} navigation={navigation} />
                : <ModeManual setMode={setMode} navigation={navigation} />
            }
        </Container>
    )
}

const ModeCamera: React.FC<CameraProps> = ({
    setMode,
    navigation
}) => {
    return (
        <>
            <BoxCommon alignItems='center'>
                <Button
                    type='ghostSolidSmall'
                    text='Manual'
                    icon={Manual}
                    sizeIcon={{width: '20px', height: '20px'}}
                    onPress={() => setMode('manual')}
                />
                {/* <BoxCard
                    title='Nutella'
                    subtitle='R$ 20,00'
                    tag={{type: 'rectangle', value: '3'}}
                    mt='30px'
                /> */}
            </BoxCommon>
            <BoxColumn justifyContent='space-between' alignItems='center'>
                <Button type='hexagonGhostSolidMedium' text={Lightning} onPress={() => null} />
                <Button type='hexagonGradientLarge' text={Scan} sizeIcon={{width: 130, height: 40, top: 37}} onPress={() => null} ml='5px' />
                <Button type='hexagonPrimaryMedium' text={Arrow} onPress={() => navigation.navigate('Details')} tag='2' mr='-10px' />
            </BoxColumn>
        </>
    )
}

const ModeManual: React.FC<ManuelProps> = ({
    setMode,
    navigation
}) => {
    return (
        <>
            <BoxCommon alignItems='center'>
                <Button
                    type='ghostSolidSmall'
                    text='Câmera'
                    icon={Camera}
                    sizeIcon={{width: '20px', height: '20px'}}
                    onPress={() => setMode('camera')}
                />
                {/* <BoxCard
                    title='Nutella'
                    subtitle='R$ 20,00'
                    tag={{type: 'rectangle', value: '3'}}
                    mt='30px'
                /> */}
            </BoxCommon>
            <Input placeholder='Digite o código de barras' />
            <BoxColumn justifyContent='space-between' alignItems='center'>
                <BoxCommon alignItems='center' flex>
                    <Button type='hexagonGradientLarge' text='Ok' onPress={() => null} ml='90px' />
                </BoxCommon>
                <Button type='hexagonPrimaryMedium' text={Arrow} onPress={() => navigation.navigate('Details')} tag='2' mr='-10px' />
            </BoxColumn>
        </>
    )
}

export default View;