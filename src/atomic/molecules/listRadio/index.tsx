import React from "react";

import { Separator } from "../../atoms/boxes/separator";
import Text from "../../atoms/text";
import { black, white } from "../../constants/colors";

import { IndexProps } from "./models";
import { BoxItem, Main } from "./style";

const ListRadio: React.FC<IndexProps> = ({
    items,
    itemSelected,
    setItemSelected
}) => {
    return (
        <Main>
            {
                items.map((value, index) => (
                    <>
                        <BoxItem
                            itemSelected={itemSelected === value.id}
                            onPress={() => setItemSelected(value.id)}
                        >
                            <Text
                                text={value.description}
                                type='H3'
                                align='center'
                                color={itemSelected === value.id ? white : black}
                            />
                        </BoxItem>
                        {
                            index < items.length-1 && <Separator />
                        }
                    </>
                ))
            }
        </Main>
    )
}

export default ListRadio;