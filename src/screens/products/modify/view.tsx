import React from "react";
import Button from "../../../atomic/atoms/button";
import Container from "../../../atomic/atoms/container";
import Input from "../../../atomic/atoms/input";
import { ViewProps } from "./models";

const ProductModify: React.FC<ViewProps> = ({
    name,
    setName,
    price,
    setPrice,
    barCode,
    setBarCode
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
                mb='15px'
            />
            <Input
                width='90%'
                placeholder='Código de Barras'
                value={barCode}
                onChangeText={setBarCode}
                mb='15px'
            />
            <Button
                type='primaryLarge'
                text='Salvar'
                onPress={() => null}
                mt='10px'
            />
            <Button
                type='warningLarge'
                text='Excluir'
                onPress={() => null}
                mt='20px'
            />
        </Container>
    )
}

export default ProductModify;