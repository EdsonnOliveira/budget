import React from "react";

import { H1, H2, H3, H4, H5 } from "./style";
import Model from "./models";

const Text: React.FC<Model> = ({
    text,
    type,
    color,
    align,
    mt,
    ml,
    mr,
    mb
}) => {
    switch (type) {
        case 'H1':
            return <H1 color={color} textAlign={align} mt={mt} ml={ml} mr={mr} mb={mb}>{ text }</H1>
        case 'H2':
            return <H2 color={color} textAlign={align} mt={mt} ml={ml} mr={mr} mb={mb}>{ text }</H2>
        case 'H3':
            return <H3 color={color} textAlign={align} mt={mt} ml={ml} mr={mr} mb={mb}>{ text }</H3>
        case 'H4':
            return <H4 color={color} textAlign={align} mt={mt} ml={ml} mr={mr} mb={mb}>{ text }</H4>
        case 'H5':
            return <H5 color={color} textAlign={align} mt={mt} ml={ml} mr={mr} mb={mb}>{ text }</H5>
    }
}

export default Text;