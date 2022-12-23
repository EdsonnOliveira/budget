import React from "react";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import TabBottomBar from "../../atomic/organisms/tabBottomBar";
import View from "./view";

const Details: React.FC = ({}) => {
    return (
        <>
            <Main statusBar>
                <Header title='Detalhes' />
                <View />
            </Main>
            <TabBottomBar />
        </>
    )
}

export default Details;