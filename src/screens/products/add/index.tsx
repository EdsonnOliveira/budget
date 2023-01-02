import React, { useState } from "react";

import Main from "../../../atomic/atoms/main";
import Header from "../../../atomic/molecules/header";
import TabBottomBar from "../../../atomic/organisms/tabBottomBar";

import View from "./view";

const ProductsAdd: React.FC = ({}) => {
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [barCode, setBarCode] = useState<string>('')
    
    return (
        <>
            <Main>
                <Header title='Adicionar produto' />
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

export default ProductsAdd;