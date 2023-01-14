import React from "react";

import { white } from "../../constants/colors";
import Text from "../text";

import { NotificationProps } from "./models";
import { Main } from "./style";

const Notification: React.FC<NotificationProps> = ({
    title,
    type,
    state,
    mt,
    ml,
    mr,
    mb
}) => {
    if (state === 'hide')
        return <></>
    
    return (
        <Main type={type} mt={mt} ml={ml} mr={mr} mb={mb}>
            <Text text={title} type='H3' color={white} />
        </Main>
    )
}

export default Notification;