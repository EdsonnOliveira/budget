import React from "react";

import Button from "../../../atomic/atoms/button";
import Container from "../../../atomic/atoms/container";
import Input from "../../../atomic/atoms/input";
import Notification from "../../../atomic/atoms/notification";

import { ViewProps } from "./models";

const ProductAdd: React.FC<ViewProps> = ({
    name,
    setName,
    price,
    setPrice,
    barCode,
    setBarCode,
    buttonDisabled,
    setModalBarCode,
    notification,
    insert
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
                mb='15px'
            />
            <Button
                type='primaryLarge'
                text='Salvar'
                disabled={!!buttonDisabled}
                onPress={insert}
                mt='10px'
            />
            <Notification type={notification.type} title={notification.title} state={notification.state} mt='20px' />
        </Container>
    )
}

export default ProductAdd;