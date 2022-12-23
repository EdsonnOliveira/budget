import React from "react";
import { IndexProps } from "./models";

import { Main, TextInput } from "./style";

const Input: React.FC<IndexProps> = ({
    value,
    onChangeText,
    placeholder
}) => {
    return (
        <Main>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </Main>
    )
}

export default Input;