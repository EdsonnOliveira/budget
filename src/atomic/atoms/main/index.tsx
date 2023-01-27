import React from "react";
import { StatusBar } from "react-native";
import { IndexProps } from "./models";

import { Container, SafeArea } from './style'

const Main: React.FC<IndexProps> = ({
    statusBar,
    children,
    noMargin,
    bgColor
}) => {
    return (
        <>
            { !!!statusBar?.doNotShow && <SafeArea statusBar={{bgColor: statusBar?.bgColor}} /> }
            <Container noMargin={noMargin} bgColor={bgColor}>
                <StatusBar barStyle={statusBar?.barStyle ?? 'default'} backgroundColor={statusBar?.bgColor} translucent />
                { children }
            </Container>
        </>
    )
}

export default Main;