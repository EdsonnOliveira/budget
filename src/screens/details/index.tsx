import React, { useState } from "react";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { Items } from "../../atomic/molecules/radio/models";
import TabBottomBar from "../../atomic/organisms/tabBottomBar";
import { PaymentTypes } from "../../constants/types";

import View from "./view";

const ItemsPayment: Items[] = [
    {
        id: 0,
        description: PaymentTypes.money
    },
    {
        id: 1,
        description: PaymentTypes.credit
    },
    {
        id: 2,
        description: PaymentTypes.debit
    },
]

const Details: React.FC = ({}) => {
    const [paymentSelected, setPaymentSelected] = useState<number>(-1)

    return (
        <>
            <Main>
                <Header title='Detalhes' />
                <View
                    itemsPayment={ItemsPayment}
                    paymentSelected={paymentSelected}
                    setPaymentSelected={setPaymentSelected}
                />
            </Main>
            <TabBottomBar />
        </>
    )
}

export default Details;