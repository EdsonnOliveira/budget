import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

import Main from "../../../atomic/atoms/main";
import { NotificationProps } from "../../../atomic/atoms/notification/models";
import { white } from "../../../atomic/constants/colors";
import Header from "../../../atomic/molecules/header";
import BottomSheet from "../../../atomic/organisms/bottomSheet";
import TabBottomBar from "../../../atomic/organisms/tabBottomBar";
import { StackProps } from "../../../routes/models";

import DBProducts from '../../../services/sqlite/products'

import View from "./view";

const ProductsAdd: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()
    const route = useRoute<RouteProp<StackProps, 'ProductsAdd'>>().params;

    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [barCode, setBarCode] = useState<string>('')

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
    const [modalBarCode, setModalBarCode] = useState<boolean>(false)
    const [notification, setNotification] = useState<NotificationProps>({title: '', type: 'warning', state: 'hide'})

    useEffect(() => {
        verify()
    }, [name, price, barCode])

    useEffect(() => {
        if (route != undefined) {
            if (route?.barCode != '')
                setBarCode(route.barCode)
        }
    }, [route])

    const verify = () => {
        setButtonDisabled(true)
        if (name.length > 0 &&
            price.length > 0 &&
            barCode.length > 0)
            setButtonDisabled(false)
    }

    useEffect(() => {
        if (notification.state === 'show') {
            setTimeout(() => {
                setNotification(data => ({
                    ...data,
                    state: 'hide'
                }))
            }, 5000);
        }
    }, [notification?.state])
    
    const insert = () => {
        DBProducts
        .insert({name, price: price.replace('R$', '').replace(' ', ''), barCode})
        .then(() => {
            setName('')
            setPrice('')
            setBarCode('')
            setNotification({title: 'Produto Adicionado!', type: 'success', state: 'show'})
        })
        .catch(() => setNotification({title: 'Algo de errado aconteceu!', type: 'warning', state: 'show'}))

        if (route != undefined) {
            if (route.barCode != '')
                navigation.navigate('Scanner')
        }
    }

    return (
        <>
            <Main statusBar={{ barStyle: 'dark-content', bgColor: white }}>
                <Header title='Adicionar produto' />
                <View
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    barCode={barCode}
                    setBarCode={setBarCode}
                    buttonDisabled={buttonDisabled}
                    setModalBarCode={setModalBarCode}
                    notification={notification}
                    insert={insert}
                />
            </Main>
            <BottomSheet
                title='Ler código de barras'
                type='scanner'
                visible={modalBarCode}
                setState={setModalBarCode}
                returnConfirm={setBarCode}
            />
            <TabBottomBar />
        </>
    )
}

export default ProductsAdd;