import React from "react";

import Button from "../../atomic/atoms/button";
import Container from "../../atomic/atoms/container";
import ListProduct from "../../atomic/molecules/listProduct";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    navigation,
    items
}) => {
    return (
        <Container alignItems='center'>
            <Button
                type='primaryLarge'
                text='Adicionar produto'
                onPress={() => navigation.navigate('ProductsAdd')}
                mt='10px'
                mb='30px'
            />
            <ListProduct
                data={items}
                onPress={(data) => navigation.navigate('ProductsModify', {data})}
            />
        </Container>
    )
}

export default View;