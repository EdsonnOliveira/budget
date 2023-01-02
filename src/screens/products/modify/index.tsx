import React, { useState } from "react";

import { useRoute } from "@react-navigation/native";

import Main from "../../../atomic/atoms/main";
import Header from "../../../atomic/molecules/header";
import TabBottomBar from "../../../atomic/organisms/tabBottomBar";

import View from "./view";

const ProductsModify: React.FC = ({}) => {
    const data = useRoute().params?.data;

    const [name, setName] = useState<string>(data?.name)
    const [price, setPrice] = useState<string>(data?.value)
    const [barCode, setBarCode] = useState<string>(data?.barCode)
    
    return (
        <>
            <Main>
                <Header title='Alterar produto' />
                <View
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    barCode={barCode}
                    setBarCode={setBarCode}
                />
            </Main>
            <TabBottomBar />
        </>
    )
}

export default ProductsModify;