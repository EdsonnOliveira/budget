import React from "react";

import BoxCommon from "../../atomic/atoms/boxes/boxCommon";
import Button from "../../atomic/atoms/button";
import Container from "../../atomic/atoms/container";
import ListProduct from "../../atomic/atoms/listProduct";
import Text from "../../atomic/atoms/text";
import BoxValue from "../../atomic/molecules/boxValue";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    total,
    products,
    setModalPayment,
    paymentSelected,
    setModalItem,
    setItemSelected,
    disabledFinish,
    finishSale
}) => {
    return (
        <Container>
            <BoxValue type='medium' value={total} />
            <Text text='Pagar com' type='H2' mt='25px' mb='10px' />
            <Button
                type='bottomSheet'
                text={paymentSelected.id == -1
                        ? `Selecionar a forma\nde pagamento`
                        : `Pagamento selecionado: ${paymentSelected.description}`}
                onPress={() => setModalPayment(true)}
            />
            <Text text='Itens' type='H2' mt='25px' mb='10px' />
            <ListProduct
                data={products}
                onPress={(data, index) => {
                    setModalItem(true)
                    setItemSelected(Number(data.sequence))
                }}
            />
            <BoxCommon alignItems='center' width='100%' mt='20px' mb='10px'>
                <Button
                    type='primaryLarge'
                    text='Finalizar'
                    disabled={disabledFinish}
                    onPress={finishSale}
                />
            </BoxCommon>
        </Container>
    )
}

export default View;