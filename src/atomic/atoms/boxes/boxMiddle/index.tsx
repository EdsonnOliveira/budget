import React from "react";

import { black, cian, white } from "../../../constants/colors";
import Text from "../../text";

import Model from "./models";
import { BoxText, Main, Image, BoxIcon } from "./style";

const BoxMiddle: React.FC<Model> = ({
    icon,
    title,
    value,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main mt={mt} ml={ml} mr={mr} mb={mb}>
            {
                typeof icon == 'string'
                ? (
                    <BoxIcon>
                        <Text text={icon.toString()} type='H4' color={white} />
                    </BoxIcon>
                )
                : <Image source={icon} />
            }
            <BoxText>
                <Text text={title} type='H4' color={cian} align='right' mb='5px' />
                <Text text={value} type='H3' color={black} align='right' mb='5px' />
            </BoxText>
        </Main>
    )
}

export default BoxMiddle;