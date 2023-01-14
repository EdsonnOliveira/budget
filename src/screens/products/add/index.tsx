import React, { useEffect, useState } from "react";

import Main from "../../../atomic/atoms/main";
import { NotificationProps } from "../../../atomic/atoms/notification/models";
import Header from "../../../atomic/molecules/header";
import TabBottomBar from "../../../atomic/organisms/tabBottomBar";

import DBProducts from '../../../services/products'

import View from "./view";

const ProductsAdd: React.FC = ({}) => {
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [barCode, setBarCode] = useState<string>('')

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
    const [notification, setNotification] = useState<NotificationProps>({title: '', type: 'warning', state: 'hide'})

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
            }, 5000);
        }
    }, [notification?.state])
    
    const insert = () => {
        DBProducts
        .insert({name, price: price.replace('R$', ''), barCode})
        .then(() => {
            setName('')
            setPrice('')
            setBarCode('')
            setNotification({title: 'Produto Adicionado!', type: 'success', state: 'show'})
        })
        .catch(() => setNotification({title: 'Algo de errado aconteceu!', type: 'warning', state: 'show'}))
    }

    return (
        <>
            <Main>
                <Header title='Adicionar produto' />
                <View
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    barCode={barCode}
                    setBarCode={setBarCode}
                    buttonDisabled={buttonDisabled}
                    notification={notification}
                    insert={insert}
                />
            </Main>
            <TabBottomBar />
        </>
    )
}

export default ProductsAdd;