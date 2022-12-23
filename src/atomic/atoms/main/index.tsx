import React from "react";
import { StatusBar } from "react-native";
import { IndexProps } from "./models";

import { Container } from './style'

const Main: React.FC<IndexProps> = ({
    statusBar,
    children,
    noMargin,
    bgColor
}) => {
    return (
        <Container noMargin={noMargin} bgColor={bgColor}>
            <StatusBar barStyle={statusBar ? 'light-content' : 'dark-content'} translucent />
            { children }
        </Container>
    )
}

export default Main;