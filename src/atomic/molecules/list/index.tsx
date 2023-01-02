import React from "react";
import Text from "../../atoms/text";
import { gray } from "../../constants/colors";
import { IndexProps } from "./models";
import { Item, Main } from "./style";

const List: React.FC<IndexProps> = ({
    items
}) => {
    return (
        <Main>
            {
                items.map((item) => (
                    <Item>
                        {
                            item.type == 'big'
                            ? (
                                <>
                                    <Text type='H2' text={item.title} weight='800' />
                                    <Text type='H2' text={item.value} weight='800' />
                                </>
                            )
                            : (
                                <>
                                    <Text type='H5' text={item.title} weight='400' color={gray} />
                                    <Text type='H5' text={item.value} weight='700' />
                                </>
                            )
                        }
                    </Item>
                ))
            }
        </Main>
    )
}

export default List;