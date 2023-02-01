import React from "react";

import { IndexProps } from "./models";
import { Button, Main, TextInput, TextInputMask, Image } from "./style";

const Input: React.FC<IndexProps> = ({
    width,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    actionButton,
    autoFocus,
    icon,
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
                        autoFocus={autoFocus}
                    />
                ) : (
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        autoFocus={autoFocus}
                    />
                )
            }
            {
                actionButton && (
                    <Button
                        onPress={actionButton.onPress}
                    >
                        <Image
                            source={icon?.source}
                            style={{
                                width: icon?.width ?? '100%',
                                height: icon?.height ?? null,
                                top: icon?.top ?? 0,
                                left: icon?.left ?? 0,
                                position: icon?.position ?? 'relative',
                                zIndex: 2,
                                resizeMode: 'contain'
                            }}
                        />
                    </Button>
                )
            }
        </Main>
    )
}

export default Input;