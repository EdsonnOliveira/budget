import React, { useEffect, useLayoutEffect, useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ItemType } from "../../constants/types";
import { StackProps } from "../../routes/models";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import TabBottomBar from "../../atomic/organisms/tabBottomBar";

import DBProducts, { Models as ModelsProducts } from '../../services/products'

import View from "./view";

const Products: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()
    
    const [items, setItem] = useState<ItemType[]>()

    useFocusEffect(() => {
        listAll()
    })

    const listAll = () => {
        DBProducts
        .listAll()
        .then((value: ModelsProducts[]) => {
            let items: ItemType[] = []
            value.map((item) => {
                let json: ItemType = {
                    sequence: String(item.id),
                    name: String(item.name),
                    value: String(item.price),
                    barCode: String(item.barCode)
                }
                items.push(json)
            })
            setItem(items)
        })
        .catch((value: any) => {
            console.warn(value)
        })
    }

    return (
        <>
            <Main statusBar={{ barStyle: 'dark-content' }}>
                <Header title='Produtos' noBackButton />
                <View
                    navigation={navigation}
                    items={items}
                />
            </Main>
            <TabBottomBar screenSelected='products' />
        </>
    )
}

export default Products;