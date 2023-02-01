import React from "react";

import Button from "../../../atomic/atoms/button";
import Container from "../../../atomic/atoms/container";
import Input from "../../../atomic/atoms/input";
import Notification from "../../../atomic/atoms/notification";

import Scan from '../../../assets/icons/ScanW.png'

import { ViewProps } from "./models";

const ProductModify: React.FC<ViewProps> = ({
    name,
    setName,
    price,
    setPrice,
    barCode,
    setBarCode,
    buttonDisabled,
    setModalBarCode,
    notification,
    setModalDelete,
    update,
    del
}) => {
    return (
        <Container alignItems='center'>
            <Input
                width='90%'
                placeholder='Nome do produto'
                value={name}
                onChangeText={setName}
                mb='15px'
            />
            <Input
                width='90%'
                placeholder='Valor do produto'
                value={price}
                onChangeText={setPrice}
                keyboardType='money'
                mb='15px'
            />
            <Input
                width='90%'
                placeholder='Código de Barras'
                value={barCode}
                onChangeText={setBarCode}
                keyboardType='number-pad'
                actionButton={{
                    onPress: () => setModalBarCode(true)
                }}
                icon={{
                    source: Scan,
                    width: 25,
                    height: 25
                }}
                mb='15px'
            />
            <Button
                type='primaryLarge'
                text='Salvar'
                disabled={!!buttonDisabled}
                onPress={update}
                mt='10px'
            />
            <Button
                type='warningLarge'
                text='Excluir'
                disabled={notification.state === 'show'}
                onPress={() => setModalDelete(true)}
                mt='20px'
            />
            <Notification type={notification.type} title={notification.title} state={notification.state} mt='20px' />
        </Container>
    )
}

export default ProductModify;