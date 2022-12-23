import React from "react";

import Container from "../../atomic/atoms/container";
import Text from "../../atomic/atoms/text";
import BoxValue from "../../atomic/molecules/boxValue";

const View: React.FC = ({}) => {
    return (
        <Container>
            <BoxValue type='medium' label='Hoje' value='83,00' />
            <Text text='Pagar com' type='H2' mt='25px' mb='25px' />
            <Text text='Itens' type='H2' mt='25px' mb='25px' />
        </Container>
    )
}

export default View;