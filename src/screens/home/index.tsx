import React from 'react';

import { BudgetType, PaymentTypes } from '../../constants/types';

import Main from '../../atomic/atoms/main';
import BoxValue from '../../atomic/molecules/boxValue';

import View from './view'
import TabBottomBar from '../../atomic/organisms/tabBottomBar';

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
    return (
        <>
            <Main statusBar>
                <BoxValue type='big' label='Hoje' value='190,00' />
                <View history={Items} />
            </Main>
            <TabBottomBar screenSelected='home' />
        </>
    )
}

export default Home;