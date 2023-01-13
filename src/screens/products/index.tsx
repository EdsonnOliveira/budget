import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import TabBottomBar from "../../atomic/organisms/tabBottomBar";
import { ItemType } from "../../constants/types";
import { StackProps } from "../../routes/models";
import View from "./view";

const Items: ItemType[] = [
    {
        sequence: '1',
        name: 'Nutella',
        value: '30,00',
        barCode: '1'
    },
    {
        sequence: '2',
        name: 'Toddy',
        value: '7,00',
        barCode: '2'
    },
]

const Products: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    return (
        <>
            <Main statusBar={{ barStyle: 'dark-content' }}>
                <Header title='Produtos' noBackButton />
                <View
                    navigation={navigation}
                    items={Items}
                />
            </Main>
            <TabBottomBar screenSelected='products' />
        </>
    )
}

export default Products;