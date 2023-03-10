import React, { useEffect, useState } from "react";

import { Creators as ValueActions } from '../../services/redux/ducks/value';

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { currency } from "../../constants/formats";
import { StackProps } from "../../routes/models";
import { white } from "../../atomic/constants/colors";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { ItemsList } from "../../atomic/molecules/list/models";
import { ItemsRadio } from "../../atomic/molecules/radio/models";
import BottomSheet from "../../atomic/organisms/bottomSheet";
import TabBottomBar from "../../atomic/organisms/tabBottomBar";
import { ItemType, PaymentTypes } from "../../constants/types";

import DBSales, { Models as ModelsSales } from '../../services/sqlite/sales'
import DBSalesItems, { Models as ModelsSalesItems } from '../../services/sqlite/sales/items'

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IndexProps } from "./models";

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

const Details: React.FC<IndexProps> = ({
    setValueSoldToday
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()
    const route = useRoute<RouteProp<StackProps, 'Details'>>().params;

    const [data, setData] = useState<ModelsSales | null>()

    const [paymentSelected, setPaymentSelected] = useState<number>(-1)

    const [modalItem, setModalItem] = useState<boolean>(false);
    const [itemSelectedSeq, setItemSelectedSeq] = useState<number>(-1)
    const [itemSelected, setItemSelected] = useState<number>(-1)

    const [products, setProducts] = useState<ItemType[] | null>([])

    const [paymentInfo, setPaymentInfo] = useState<ItemsList>({title: 'Pagamento', value: 'Dinheiro'})
    const [descountInfo, setDescountInfo] = useState<ItemsList>({title: 'Desconto', value: 'R$ 0,00'})
    const [subtotalInfo, setSubtotalInfo] = useState<ItemsList>({title: 'Subtotal', value: 'R$ 0,00'})
    const [totalInfo, setTotalInfo] = useState<ItemsList>({title: 'Total', value: '0,00', valueNumber: 0.00, type: 'big'})

    useEffect(() => {
        setInfos()
    }, [route])

    const setInfos = () => {
        setData(null)
        setProducts(null)
        setTotalInfo(data => ({
            ...data,
            value: '0,00'
        }))

        DBSales
        .findOne({ id: String(route.idSale) })
        .then((data: ModelsSales) => {
            setData(data)
            if (data.situation == 1)
                return
            
            setPaymentSelected(Number(data.idPayment)-1)
        })

        let items: ItemType[] = []

        DBSalesItems
        .listAll({idSale: String(route.idSale)})
        .then((data: ModelsSalesItems[]) => {
            data.map((item) => {
                let json: ItemType = {
                    id: String(item?.id),
                    sequence: String(item?.sequence),
                    name: String(item?.name),
                    value: String(item?.priceTotal),
                    barCode: String(item?.barCode)
                }
                
                items.push(json)
            })

            setProducts(items)
        })
        .catch(() => setProducts(null))

        DBSalesItems
        .findValues({idSale: String(route.idSale)})
        .then((data: ModelsSalesItems) => {
            let total = currency(Number(data.priceTotal), 2, 3, '.', ',')
            setSubtotalInfo(data => ({
                ...data,
                value: total
            }))
            setTotalInfo(data => ({
                ...data,
                value: total
            }))
        })
        .catch(() => {
            setSubtotalInfo(data => ({
                ...data,
                value: '0,00'
            }))
            setTotalInfo(data => ({
                ...data,
                value: '0,00'
            }))
        })
        
    }

    useEffect(() => {
        if (paymentSelected != -1)
        setPaymentInfo({title: 'Pagamento', value: Payments[paymentSelected].description})
    }, [paymentSelected])

    const delItem = () => {
        DBSalesItems
        .del({ id: String(itemSelected) })
        .then(() => {
            setModalItem(false)
            setInfos()
        })
    }

    const [modalFinish, setModalFinish] = useState<boolean>(false)

    const finishSale = () => {
        setModalFinish(true)
    }

    const [textFinish, setTextFinish] = useState<string>('Finalizar')

    const finish = () => {
        setTextFinish('Aguarde...')
        let idPayment;
        switch (paymentInfo.value) {
            case PaymentTypes.credit:
                idPayment = 2
                break;
            case PaymentTypes.debit:
                idPayment = 3
                break;
            default:
                idPayment = 1
        }

        DBSales
        .update({
            idPayment: Number(idPayment),
            descount: String(descountInfo.value),
            subTotal: String(subtotalInfo.value),
            total: String(totalInfo.value),
            situation: 2,
            id: String(route.idSale)
        })
        .then(() => {
            let date = new Date();
            let currentDate = `${date.getDate()}/${String(date.getMonth()+1).padStart(2, '0')}/${date.getFullYear()}`

            let today = 0;

            DBSales
            .findValues({date: currentDate})
            .then((data: ModelsSales[]) => {
                data.map((item) => today += Number(item.total))
                setValueSoldToday(String(today))
            })
            .catch(() => setTextFinish('Erro!'))

            setTextFinish('Finalizado!')
            setTimeout(() => {
                setModalFinish(false)
                navigation.navigate('DetailsFinished');
            }, 1500);
        })
        .catch(() => setTextFinish('Algo de errado aconteceu!'))
    }

    return (
        <>
            <Main statusBar={{ barStyle: 'dark-content', bgColor: white }}>
                <Header title={data?.situation == 1 ? 'Novo Or??amento' : 'Visualizar Or??amento' } />
                <View
                    data={data}
                    total={totalInfo.value}
                    products={products}
                    payments={Payments}
                    paymentSelected={paymentSelected}
                    setPaymentSelected={setPaymentSelected}
                    setModalItem={setModalItem}
                    setItemSelected={setItemSelected}
                    setItemSelectedSeq={setItemSelectedSeq}
                    disabledFinish={paymentSelected != -1 ? false : true}
                    finishSale={finishSale}
                />
            </Main>
            <TabBottomBar />
            <BottomSheet
                title='Finaliza????o'
                type='list'
                items={[
                    {...paymentInfo},
                    {...descountInfo},
                    {...subtotalInfo, value: `R$ ${subtotalInfo.value}`},
                    {...totalInfo, value: `R$ ${totalInfo.value}`}
                ]}
                visible={modalFinish}
                setState={setModalFinish}
                buttonConfirm={{
                    type: 'gradientLarge',
                    text: textFinish,
                    onPress: finish
                }}
            />
            <BottomSheet
                title='Excluir item'
                description={'Tem certeza que deseja\nexcluir o'}
                descriptionBold={`Item ${itemSelectedSeq}?`}
                type='question'
                visible={modalItem}
                setState={setModalItem}
                buttonConfirm={{
                    type: 'warningLarge',
                    text: 'Excluir',
                    onPress: delItem
                }}
            />
        </>
    )
}

const mapStateToProps = () => ({})

const mapDispatchProps = (dispatch: Dispatch) => {
    return bindActionCreators (
        {
            ...ValueActions
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Details);