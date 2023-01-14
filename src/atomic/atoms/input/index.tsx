import React from "react";

import { IndexProps } from "./models";
import { Main, TextInput, TextInputMask } from "./style";

const Input: React.FC<IndexProps> = ({
    width,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main width={width} mt={mt} ml={ml} mr={mr} mb={mb}>
            {
                keyboardType === 'money' ? (
                    <TextInputMask
                        style={{ flex: 1 }}
                        type='money'
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$ ',
                            suffixUnit: ''
                        }}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                    />
                ) : (
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                    />
                )
            }
        </Main>
    )
}

export default Input;