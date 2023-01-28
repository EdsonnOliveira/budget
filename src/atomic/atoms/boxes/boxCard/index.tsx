import React from "react";
import { black, gray } from "../../../constants/colors";
import Tag from "../../tag";
import Text from "../../text";
import { IndexProps } from "./models";
import { BoxText, Main } from "./style";

const BoxCard: React.FC<IndexProps> = ({
    title,
    subtitle,
    tag,
    onPress,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main onPress={onPress} mt={mt} ml={ml} mr={mr} mb={mb}>
            {
                tag && subtitle ? (
                    <>
                        <Tag type={tag.type} value={tag.value} />
                        <BoxText>
                            <Text text={title} type='H4' color={gray} />
                            <Text text={subtitle} type='H5' />
                        </BoxText>
                    </>
                ) : <Text text={title} type='H4' color={black} align='center' />
            }
        </Main>
    )
}

export default BoxCard;