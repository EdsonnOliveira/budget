import React from "react";

import { RNCamera } from "react-native-camera";
import { screenHeight, screenWidth } from "../../atomic/constants/dimension";
import BarcodeMask from "react-native-barcode-mask";

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

import { CameraProps, ManualProps, ViewProps } from './models';
import { Scanner } from "./style";
import Notification from "../../atomic/atoms/notification";

const View: React.FC<ViewProps> = ({
    mode,
    total,
    quantity,
    navigation,
    setMode,
    flashMode,
    setFlashMode,
    scanned,
    scannedProduct,
    setBarCode,
    productAdded,
    addProductScanning
}) => {
    return (
        <Container alignItems='center' justifyContent='space-between'>
            {
                mode == 'camera'
                ? (
                    <ModeCamera
                        setMode={setMode}
                        navigation={navigation}
                        flashMode={flashMode}
                        setFlashMode={setFlashMode}
                        scanned={scanned}
                        scannedProduct={scannedProduct}
                        setBarCode={setBarCode}
                        productAdded={productAdded}
                        addProductScanning={addProductScanning}
                        total={total}
                        quantity={quantity}
                    />
                )
                : <ModeManual setMode={setMode} navigation={navigation} quantity={quantity} />
            }
        </Container>
    )
}

const ModeCamera: React.FC<CameraProps> = ({
    setMode,
    navigation,
    flashMode,
    setFlashMode,
    scanned,
    scannedProduct,
    setBarCode,
    productAdded,
    addProductScanning,
    quantity,
    total
}) => {
    return (
        <Scanner
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={flashMode}
            onBarCodeRead={({data}) => setBarCode(data)}
        >
            <BarcodeMask
                width={300}
                height={130}
                outerMaskOpacity={0.4}
                edgeRadius={7}
            />
            <BoxCommon alignItems='center'>
                <Button
                    type='ghostSolidSmall'
                    text='Manual'
                    icon={Manual}
                    sizeIcon={{width: '20px', height: '20px'}}
                    onPress={() => setMode('manual')}
                    mb='30px'
                />
                {
                    productAdded && (
                        <Notification
                            title='Produto adicionado!'
                            type='success'
                        />
                    )
                }
            </BoxCommon>
            {
                scanned && (
                    <BoxCard
                        title={String(scannedProduct?.name)}
                        subtitle={`R$ ${scannedProduct?.price}`}
                        tag={{type: 'rectangle', value: String(scannedProduct?.sequence)}}
                        mt='310px'
                    />
                )
            }
            <BoxColumn justifyContent='space-between' alignItems='center'>
                <Button
                    type='hexagonGhostSolidMedium'
                    text={Lightning}
                    onPress={() => setFlashMode(flashMode === 'torch' ? 'off' : 'torch')}
                />
                <Button
                    type='hexagonGradientLarge'
                    text={Scan}
                    sizeIcon={{width: 130, height: 40, top: 37}}
                    onPress={addProductScanning}
                    ml='5px'
                />
                <Button
                    type='hexagonPrimaryMedium'
                    text={Arrow}
                    onPress={() => {
                        setFlashMode('off')
                        navigation.navigate('Details', { total })
                    }}
                    tag={String(quantity)}
                    mr='-10px'
                />
            </BoxColumn>
        </Scanner>
    )
}

const ModeManual: React.FC<ManualProps> = ({
    setMode,
    navigation,
    quantity
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
                <Button type='hexagonPrimaryMedium' text={Arrow} onPress={() => navigation.navigate('Details')} tag={String(quantity)} mr='-10px' />
            </BoxColumn>
        </>
    )
}

export default View;