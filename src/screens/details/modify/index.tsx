import React from "react";

import Main from "../../../atomic/atoms/main";
import Header from "../../../atomic/molecules/header";
import TabBottomBar from "../../../atomic/organisms/tabBottomBar";
import { ItemType } from "../../../constants/types";

import View from "./view";

const Products: ItemType[] = [
    {
        id: 2,
        sequence: 2,
        name: 'Nutella',
        value: '17,00',
        barCode: '1'
    },
    {
        id: 1,
        sequence: 1,
        name: 'KitKat',
        value: '3,00',
        barCode: '2'
    },
]

const DetailsModify: React.FC = ({}) => {
    return (
        <>
            <Main>
                <Header title='Visualizar Orçamento' />
                <View
                    products={Products}
                />
            </Main>
            <TabBottomBar />
        </>
    )
}

export default DetailsModify;