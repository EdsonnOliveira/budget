import React from "react";

import BoxCommon from "../../atomic/atoms/boxes/boxCommon";
import Button from "../../atomic/atoms/button";
import Container from "../../atomic/atoms/container";
import ListProduct from "../../atomic/atoms/listProduct";
import Text from "../../atomic/atoms/text";
import BoxValue from "../../atomic/molecules/boxValue";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    data,
    total,
    products,
    setModalPayment,
    paymentSelected,
    setModalItem,
    setItemSelected,
    setItemSelectedSeq,
    disabledFinish,
    finishSale
}) => {
    return (
        <Container>
            <BoxValue type='medium' value={total} />
            <Text text={data?.situation == 1 ? 'Pagar com' : 'Pagamento selecionado'} type='H2' mt='25px' mb='10px' />
            <Button
                type='bottomSheet'
                text={paymentSelected.id == -1
                        ? `Selecionar a forma\nde pagamento`
                        : paymentSelected.description}
                onPress={() => setModalPayment(true)}
                disabled={data?.situation != 1 ? true : false }
                selected={paymentSelected.id != -1}
            />
            <Text text='Itens' type='H2' mt='25px' mb='10px' />
            <ListProduct
                data={products}
                onLongPress={(item, index) => {
                    if (data?.situation != 1)
                        return
                        
                    setModalItem(true)
                    setItemSelected(Number(item.id))
                    setItemSelectedSeq(Number(item.sequence))
                }}
            />
            {
                data?.situation == 1 && (
                    <BoxCommon alignItems='center' width='100%' mt='20px' mb='10px'>
                        <Button
                            type='primaryLarge'
                            text='Finalizar'
                            disabled={disabledFinish}
                            onPress={finishSale}
                        />
                    </BoxCommon>
                )
            }
        </Container>
    )
}

export default View;