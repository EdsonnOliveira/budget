import React from "react";

import { FlatList } from "react-native";
import Container from "../../atomic/atoms/container";
import BoxColumn from "../../atomic/atoms/boxes/column";
import BoxMiddle from "../../atomic/atoms/boxes/boxMiddle";
import { Separator } from "./style";

import Money from '../../assets/icons/money.png'
import Hand from '../../assets/icons/handMoney.png'
import Text from "../../atomic/atoms/text";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    navigation,
    history,
    soldWeek,
    soldMonth
}) => {
    return (
        <Container>
            <BoxColumn mt='-85px'>
                <BoxMiddle icon={Money} title='Semana' value={`R$ ${soldWeek}`} mr='10px' />
                <BoxMiddle icon={Hand} title='Mês' value={`R$ ${soldMonth}`} ml='10px' />
            </BoxColumn>
            <Text text='Histórico' type='H2' mt='25px' mb='10px' />
            <FlatList
                data={history}
                style={{width: '100%'}}
                renderItem={
                    ({item, index}) => (
                        <BoxMiddle
                            icon={item.sequence.toString()}
                            title={String(item.time)}
                            value={`R$ ${item.value}`}
                            ml={index % 2 == 0 ? 0 : '10px'}
                            mr={index % 2 == 0 ? '10px' : 0}
                            onPress={() => navigation.navigate('Details', { idSale: item.sequence })}
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