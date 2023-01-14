import React, { useState } from 'react'

import { white } from '../../constants/colors'

import { Main, BoxText, LineValue, BoxButton } from './style'
import Model from './models'
import Text from '../../atoms/text'
import Button from '../../atoms/button'

import EyeOpen from '../../../assets/icons/eye-open.png'
import EyeClosed from '../../../assets/icons/eye-closed.png'

const BoxValue: React.FC<Model> = ({
    type,
    label,
    value,
}) => {
    const [showValue, setShowValue] = useState<boolean>(true);

    return (
        <Main type={type}>
            {
                type == 'big'
                && 
                    <BoxButton>
                        <Button
                                type='ghostSmall'
                                text={showValue ? EyeOpen : EyeClosed}
                                onPress={() => setShowValue(!showValue)}
                            />
                    </BoxButton>
            }
            { type == 'big' && showValue && (
                <Text text={String(label)} type='H2' color={white} />
            ) }
            <BoxText align={!!!showValue}>
                {
                    showValue
                    ? (
                        <>
                            <Text text='R$' type='H2' color={white} ml='-35px' mr='10px' />
                            <Text text={value} type='H1' color={white} />
                        </>
                    )
                    : <LineValue />
                }
            </BoxText>
        </Main>
    )
}

export default BoxValue;