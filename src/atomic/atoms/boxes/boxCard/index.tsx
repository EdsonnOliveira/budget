import React from "react";
import { gray } from "../../../constants/colors";
import Tag from "../../tag";
import Text from "../../text";
import { IndexProps } from "./models";
import { BoxText, Main } from "./style";

const BoxCard: React.FC<IndexProps> = ({
    title,
    subtitle,
    tag,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main mt={mt} ml={ml} mr={mr} mb={mb}>
            <Tag type={tag.type} value={tag.value} />
            <BoxText>
                <Text text={title} type='H4' color={gray} />
                <Text text={subtitle} type='H5' />
            </BoxText>
        </Main>
    )
}

export default BoxCard;