import React, { useState } from "react";

import { RNCamera } from "react-native-camera";
import BarcodeMask from "react-native-barcode-mask";

import Text from "../../atoms/text";
import CloseImg from '../../../assets/icons/x.png'
import Radio from "../../molecules/radio";
import { ItemsRadio } from "../../molecules/radio/models";
import List from "../../molecules/list";
import Button from "../../atoms/button";
import BoxCommon from "../../atoms/boxes/boxCommon";

import { IndexProps } from "./models";
import { Backdrop, ButtonClose, Header, Main, ButtonCloseImg, Body, BoxModal, Footer, Scanner, ScannerMain } from "./style";
import { white } from "../../constants/colors";

const BottomSheet: React.FC<IndexProps> = ({
    title,
    description,
    descriptionBold,
    type,
    items,
    selectedItem,
    setSelectedItem,
    visible,
    setState,
    buttonConfirm,
    returnConfirm,
    onShow,
    onClose,
}) => {
    if (!visible) return <></>

    const [barCode, setBarCode] = useState<string>('')

    return (
        <BoxModal
            onRequestClose={onClose}
            onShow={onShow}
            transparent
        >
            <Backdrop onPress={() => setState(false)} />
            <Main>
                <Header>
                    <Text type='H2' text={title} />
                    <ButtonClose onPress={() => setState(false)}>
                        <ButtonCloseImg source={CloseImg} />
                    </ButtonClose>
                </Header>
                <Body>
                    {
                        items?.length > 0 && type == 'radio' && (
                            <Radio
                                items={items}
                                selected={selectedItem}
                                setSelected={(selected: ItemsRadio) => {
                                        setSelectedItem({id: selected.id, description: selected.description});
                                        setState(false)
                                    }
                                }
                            />
                        )
                    }
                    {
                        items?.length > 0  && type == 'list' && (
                            <List
                                items={items}
                            />
                        )
                    }
                    {
                        type == 'question' && (
                            <BoxCommon flexDirection='row' justifyContent='center' alignItems='center' flex>
                                <Text type='H3' weight='500' align='center' text={description} textBold={descriptionBold} />
                            </BoxCommon>
                        )
                    }
                    {
                        type == 'scanner' && (
                            <Scanner
                                captureAudio={false}
                                type={RNCamera.Constants.Type.back}
                                onBarCodeRead={({data}) => setBarCode(data)}
                            >
                                <ScannerMain>
                                    <Text type='H2' weight='400' align='center' text={barCode} color={white} />
                                    <Button type='hexagonGradientSmall' text='Ok' onPress={() => {
                                        returnConfirm(barCode)
                                        setState(false)
                                    }} />
                                </ScannerMain>
                                <BarcodeMask
                                    width={200}
                                    height={70}
                                    edgeWidth={0}
                                    edgeBorderWidth={0}
                                    outerMaskOpacity={0.4}
                                    edgeRadius={7}
                                />
                            </Scanner>
                        )
                    }
                </Body>
                {
                    buttonConfirm && (
                        <Footer>
                            <Button type={buttonConfirm?.type} text={buttonConfirm?.text} onPress={buttonConfirm?.onPress} />
                        </Footer>
                    )
                }
            </Main>
        </BoxModal>
    )
}

export default BottomSheet;