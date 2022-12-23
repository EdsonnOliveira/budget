import React from "react";

import Text from "../../atoms/text";
import { black, white } from "../../constants/colors";

import { IndexProps } from "./models";
import { Main, Item, Separator } from "./style";

const Radio: React.FC<IndexProps> = ({
    items,
    selected,
    setSelected,
    textSelected
}) => {
    return (
        <Main>
            {
                items.map((item, index) => (
                    <>
                        <Item
                            key={index}
                            onPress={() => setSelected(index)}
                            selected={(index === selected && !textSelected) ?? false}
                        >
                            <Text
                                type='H5'
                                text={textSelected && index === selected ? `${textSelected + item.description}` : item.description}
                                align='center'
                                color={index === selected && !textSelected ? white : black}
                            />
                        </Item>
                        {
                            index < items.length-1 && <Separator />
                        }
                    </>
                ))
            }
        </Main>
    )
}

export default Radio;