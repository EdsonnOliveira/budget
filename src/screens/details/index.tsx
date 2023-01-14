import React, { useEffect, useState } from "react";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { currency } from "../../constants/formats";
import { StackProps } from "../../routes/models";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { ItemsList } from "../../atomic/molecules/list/models";
import { ItemsRadio } from "../../atomic/molecules/radio/models";
import BottomSheet from "../../atomic/organisms/bottomSheet";
import TabBottomBar from "../../atomic/organisms/tabBottomBar";
import { ItemType, PaymentTypes } from "../../constants/types";

import View from "./view";

const Payments: ItemsRadio[] = [
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
    }
]

const Details: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()
    const route = useRoute<RouteProp<StackProps, 'Details'>>().params;

    const [modalPayment, setModalPayment] = useState<boolean>(false)
    const [paymentSelected, setPaymentSelected] = useState<ItemsRadio>({id: -1, description: ''})

    const [modalItem, setModalItem] = useState<boolean>(false);
    const [itemSelected, setItemSelected] = useState<number>(-1)

    const [products, setProducts] = useState<ItemType[]>([])

    const [paymentInfo, setPaymentInfo] = useState<ItemsList>({title: 'Pagamento', value: 'Dinheiro'})
    const [descountInfo, setDescountInfo] = useState<ItemsList>({title: 'Desconto', value: 'R$ 0,00'})
    const [subtotalInfo, setSubtotalInfo] = useState<ItemsList>({title: 'Subtotal', value: 'R$ 0,00'})
    const [totalInfo, setTotalInfo] = useState<ItemsList>({title: 'Total', value: '0,00', valueNumber: 0.00, type: 'big'})

    useEffect(() => {
        setInfos()
    }, [])

    const setInfos = () => {
        let items: ItemType[] = []
        route.items.map((item) => {
            let json: ItemType = {
                sequence: String(item?.sequence),
                name: String(item?.name),
                value: String(item?.price),
                barCode: String(item?.barCode)
            }
            items.push(json)
        })

        setProducts(items)

        let total = currency(route.total, 2, 3, '.', ',')
        setTotalInfo(data => ({
            ...data,
            value: total
        }))
    }

    useEffect(() => {
        setPaymentInfo({title: 'Pagamento', value: paymentSelected.description})
    }, [paymentSelected.description])

    const [modalFinish, setModalFinish] = useState<boolean>(false)

    const finishSale = () => {
        setModalFinish(true)
    }

    return (
        <>
            <Main statusBar={{ barStyle: 'dark-content' }}>
                <Header title='Novo Orçamento' />
                <View
                    total={totalInfo.value}
                    products={products}
                    setModalPayment={setModalPayment}
                    paymentSelected={paymentSelected}
                    setModalItem={setModalItem}
                    setItemSelected={setItemSelected}
                    disabledFinish={paymentSelected.id != -1 ? false : true}
                    finishSale={finishSale}
                />
            </Main>
            <TabBottomBar />
            <BottomSheet
                title='Forma de pagamento'
                type='radio'
                items={Payments}
                selectedItem={paymentSelected.id}
                setSelectedItem={setPaymentSelected}
                visible={modalPayment}
                setState={setModalPayment}
            />
            <BottomSheet
                title='Finalização'
                type='list'
                items={[
                    {...paymentInfo},
                    {...descountInfo},
                    {...subtotalInfo},
                    {...totalInfo, value: `R$ ${totalInfo.value}`}
                ]}
                visible={modalFinish}
                setState={setModalFinish}
                buttonConfirm={{
                    type: 'gradientLarge',
                    text: 'Finalizar',
                    onPress: () => {
                        setModalFinish(false)
                        navigation.navigate('DetailsFinished');
                    }
                }}
            />
            <BottomSheet
                title='Excluir item'
                description={'Tem certeza que deseja\nexcluir o'}
                descriptionBold={`Item ${itemSelected}?`}
                type='question'
                visible={modalItem}
                setState={setModalItem}
                buttonConfirm={{
                    type: 'warningLarge',
                    text: 'Excluir',
                    onPress: () => null
                }}
            />
        </>
    )
}

export default Details;