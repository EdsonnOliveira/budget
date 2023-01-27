import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { State as ValueTypes, Creators as ValueActions } from '../../services/redux/ducks/value';

import { BudgetType, PaymentTypes } from '../../constants/types';
import { currency } from '../../constants/formats';

import Main from '../../atomic/atoms/main';
import BoxValue from '../../atomic/molecules/boxValue';
import TabBottomBar from '../../atomic/organisms/tabBottomBar';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../routes/models';

import DBSales, { Models as ModelsSales } from '../../services/sqlite/sales'

import Button from '../../atomic/atoms/button';

import { IndexProps } from './models';
import View from './view'

const Home: React.FC<IndexProps> = ({
    valueSoldToday,
    setValueSoldToday,
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    const [soldToday, setSoldToday] = useState<string>('0,00')
    const [soldWeek, setSoldWeek] = useState<string>('0,00')
    const [soldMonth, setSoldMonth] = useState<string>('0,00')
    const [items, setItems] = useState<BudgetType[] | null>(null)

    useFocusEffect(() => {
        listAll();
    })

    useEffect(() => {
        listValues()
    }, [valueSoldToday])

    const listValues = () => {
        let date = new Date();
        let currentDate = `${date.getDate()}/${String(date.getMonth()+1).padStart(2, '0')}/${date.getFullYear()}`

        let today = 0;

        DBSales
        .findValues({date: currentDate})
        .then((data: ModelsSales[]) => {
            data.map((item) => today += Number(item.total))
            setSoldToday(String(today))
            setValueSoldToday(String(today))
        })
    }

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
                <BoxValue
                    type='big'
                    label='Hoje'
                    value={currency(Number(soldToday) || 0, 2, 3, '.', ',')}
                />
                <View
                    navigation={navigation}
                    history={items}
                    soldWeek={soldWeek}
                    soldMonth={soldMonth}
                />
            </Main>
            <TabBottomBar screenSelected='home' />
        </> 
    )
}

const mapStateToProps = ({
    valueReducer
}: {
    valueReducer: ValueTypes
}) => ({
    valueSoldToday: valueReducer.valueSoldToday
})

const mapDispatchProps = (dispatch: Dispatch) => {
    return bindActionCreators (
        {
            ...ValueActions
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Home);