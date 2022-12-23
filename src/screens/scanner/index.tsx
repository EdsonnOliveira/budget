import React, { useState } from "react";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { ModeScanner } from "./models";
import View from "./view";

const Scanner: React.FC = ({}) => {
    const [mode, setMode] = useState<ModeScanner>('camera')

    return (
        <Main noMargin bgColor="#282E36">
            <Header title='Escanear Produto' />
            <View
                mode={mode}
                setMode={setMode}
            />
        </Main>
    )
}

export default Scanner;