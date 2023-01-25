import React, { useEffect, useState } from 'react';

import { BudgetType, ItemType, PaymentTypes } from '../../constants/types';

import Main from '../../atomic/atoms/main';
import BoxValue from '../../atomic/molecules/boxValue';
import TabBottomBar from '../../atomic/organisms/tabBottomBar';

import DBSales, { Models as ModelsSales } from '../../services/sales'

import View from './view'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../routes/models';

const Items: BudgetType[] = [
    {
        sequence: 1,
        payment: PaymentTypes.money,
        value: '578,32'
    },
    {
        sequence: 2,
        payment: PaymentTypes.credit,
        value: '100,00'
    },
    {
        sequence: 1,
        payment: PaymentTypes.money,
        value: '578,32'
    },
    {
        sequence: 2,
        payment: PaymentTypes.credit,
        value: '100,00'
    },
    {
        sequence: 1,
        payment: PaymentTypes.money,
        value: '578,32'
    },
    {
        sequence: 2,
        payment: PaymentTypes.credit,
        value: '100,00'
    },
    {
        sequence: 1,
        payment: PaymentTypes.money,
        value: '578,32'
    },
    {
        sequence: 2,
        payment: PaymentTypes.credit,
        value: '100,00'
    },
    {
        sequence: 1,
        payment: PaymentTypes.money,
        value: '578,32'
    },
    {
        sequence: 2,
        payment: PaymentTypes.credit,
        value: '100,00'
    },
]

const Home: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    const [items, setItems] = useState<BudgetType[] | null>(null)

    useFocusEffect(() => {
        listAll();
    })

    const listAll = () => {
        let items: BudgetType[] = []

        DBSales
        .listAll()
        .then((data: ModelsSales[]) => {
            data.map((item) => {
                let json = {
                    sequence: String(item.id),
                    payment: item.idPayment == 1
                                ? PaymentTypes.money
                                : item.idPayment == 2
                                ? PaymentTypes.credit
                                : PaymentTypes.debit,
                    value: String(item?.total),
                }

                items.push(json)
            })
            setItems(items)
        })
    }

    return (
        <>
            <Main statusBar={{ doNotShow: true, barStyle: 'light-content' }}>
                <BoxValue type='big' label='Hoje' value='190,00' />
                <View history={items} navigation={navigation} />
            </Main>
            <TabBottomBar screenSelected='home' />
        </> 
    )
}

export default Home;