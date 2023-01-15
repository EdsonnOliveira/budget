import React, { useEffect, useState } from "react";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Main from "../../../atomic/atoms/main";
import Header from "../../../atomic/molecules/header";
import TabBottomBar from "../../../atomic/organisms/tabBottomBar";
import { StackProps } from "../../../routes/models";
import { NotificationProps } from "../../../atomic/atoms/notification/models";
import DBProducts from '../../../services/products'

import View from "./view";
import BottomSheet from "../../../atomic/organisms/bottomSheet";

const ProductsModify: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()
    const data = useRoute<RouteProp<StackProps, 'ProductsModify'>>().params?.data;

    const [name, setName] = useState<string>(data?.name)
    const [price, setPrice] = useState<string>(data?.value)
    const [barCode, setBarCode] = useState<string>(data?.barCode)

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
    const [modalBarCode, setModalBarCode] = useState<boolean>(false)
    const [notification, setNotification] = useState<NotificationProps>({title: '', type: 'warning', state: 'hide'})
    const [modalDelete, setModalDelete] = useState<boolean>(false)

    useEffect(() => {
        verify()
    }, [name, price, barCode])

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
                navigation.navigate('Products')
            }, 3000);
        }
    }, [notification?.state])

    const update = () => {
        DBProducts
        .update({name, price: price.replace('R$', '').replace(' ', ''), barCode, id: data?.sequence})
        .then(() => {
            setButtonDisabled(true)
            setNotification({title: 'Produto Alterado!', type: 'success', state: 'show'})
        })
        .catch(() => setNotification({title: 'Algo de errado aconteceu!', type: 'warning', state: 'show'}))
    }

    const del = () => {
        DBProducts
        .del({id: data?.sequence})
        .then(() => {
            setModalDelete(false)
            setButtonDisabled(true)
            setNotification({title: 'Produto Excluído!', type: 'success', state: 'show'})
        })
        .catch(() => setNotification({title: 'Algo de errado aconteceu!', type: 'warning', state: 'show'}))
    }
    
    return (
        <>
            <Main statusBar={{ barStyle: 'dark-content' }}>
                <Header title='Alterar produto' />
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
                    setModalDelete={setModalDelete}
                    update={update}
                    del={del}
                />
            </Main>
            <BottomSheet
                title='Excluir item'
                description={'Tem certeza que deseja\nexcluir o'}
                descriptionBold={`Produto ${name}?`}
                type='question'
                visible={modalDelete}
                setState={setModalDelete}
                buttonConfirm={{
                    type: 'warningLarge',
                    text: 'Excluir',
                    onPress: del
                }}
            />
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

export default ProductsModify;