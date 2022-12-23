import React from "react";
import { white } from "../../constants/colors";
import Text from "../text";

import { IndexProps } from "./models";
import { Main } from "./style";

const Tag: React.FC<IndexProps> = ({
    value,
    color,
    type,
    top,
    left,
    right,
    bottom
}) => {
    return (
        <Main type={type} color={color} top={top} left={left} right={right} bottom={bottom}>
            {
                type == 'circle'
                ? <Text text={value} type='H4' color={white} />
                : <Text text={value} type='H3' color={white} />
            }
        </Main>
    )
}

export default Tag;