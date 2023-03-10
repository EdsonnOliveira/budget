import React from "react";
import { FlatList, Vibration } from "react-native";

import BoxMiddle from "../../atoms/boxes/boxMiddle";
import { Separator } from "../../atoms/boxes/separator";

import { IndexProps } from "./models";

const ListProduct: React.FC<IndexProps> = ({
    data,
    onPress,
    onLongPress
}) => {
    return (
        <FlatList
            data={data}
            style={{ width: '100%' }}
            contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 7, paddingTop: 10 }}
            renderItem={
                ({item, index}) => (
                    <BoxMiddle
                        icon={item.sequence.toString()}
                        title={item.name}
                        value={`R$ ${item.value}`}
                        ml={index % 2 == 0 ? 0 : '10px'}
                        mr={index % 2 == 0 ? '10px' : 0}
                        onPress={() => onPress ? onPress(item, index) : null}
                        onLongPress={() => {
                            if (onLongPress) {
                                Vibration.vibrate()
                                onLongPress(item, index)
                            } else null}
                        }
                    />
                )
            }
            numColumns={2}
            initialNumToRender={12}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <Separator />}
        />
    )
}

export default ListProduct;