import React from "react";
import BoxCommon from "../../atomic/atoms/boxes/boxCommon";
import Button from "../../atomic/atoms/button";

import Container from "../../atomic/atoms/container";
import Text from "../../atomic/atoms/text";
import BoxValue from "../../atomic/molecules/boxValue";
import Radio from "../../atomic/molecules/radio";
import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    itemsPayment,
    paymentSelected,
    setPaymentSelected
}) => {
    return (
        <Container>
            <BoxValue type='medium' label='Hoje' value='83,00' />
            <Text text='Pagar com' type='H2' mt='25px' mb='10px' />
            <Button type='bottomSheet' text={`Selecionar a forma\nde pagamento`} onPress={() => null} />
            <Text text='Itens' type='H2' mt='25px' mb='10px' />
            <BoxCommon alignItems='center' width='100%'>
                <Button type='primaryLarge' text='Finalizar' disabled onPress={() => null} />
            </BoxCommon>
        </Container>
    )
}

export default View;