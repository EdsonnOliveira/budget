import React from "react";
import { white } from "../../constants/colors";
import Text from "../text";
import { IndexProps } from "./models";
import { Main } from "./style";

const Notification: React.FC<IndexProps> = ({
    title,
    type,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main type={type} mt={mt} ml={ml} mr={mr} mb={mb}>
            <Text text={title} type='H3' color={white} />
        </Main>
    )
}

export default Notification;