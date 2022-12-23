import React from "react";

import { FlatList } from "react-native";
import Container from "../../atomic/atoms/container";
import BoxColumn from "../../atomic/atoms/boxes/column";
import BoxMiddle from "../../atomic/atoms/boxes/boxMiddle";

import Money from '../../assets/icons/money.png'
import Hand from '../../assets/icons/handMoney.png'
import Text from "../../atomic/atoms/text";

import { ViewProps } from "./models";
import { Separator } from "./style";

const View: React.FC<ViewProps> = ({
    history
}) => {
    return (
        <Container>
            <BoxColumn mt='-85px'>
                <BoxMiddle icon={Money} title='Semana' value='R$ 4.270,15' mr='10px' />
                <BoxMiddle icon={Hand} title='Mês' value='R$ 13.021,99' ml='10px' />
            </BoxColumn>
            <Text text='Histórico' type='H2' mt='25px' mb='10px' />
            <FlatList
                data={history}
                style={{width: '100%'}}
                renderItem={
                    ({item, index}) => (
                        <BoxMiddle
                            icon={item.sequence.toString()}
                            title={item.payment}
                            value={`R$ ${item.value}`}
                            ml={index % 2 == 0 ? 0 : '10px'}
                            mr={index % 2 == 0 ? '10px' : 0}
                        />
                    )
                }
                numColumns={2}
                initialNumToRender={12}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                ItemSeparatorComponent={() => <Separator/>}
            />
        </Container>
    )
}

export default View;