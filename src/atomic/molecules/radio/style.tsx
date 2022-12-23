import styled from "styled-components/native";
import { borderRadius } from "../../constants/button";
import { grey, secondary } from "../../constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.View`
    width: 100%;
`

export const Item = styled.TouchableOpacity`
    width: 100%;
    height: 90px;
    background-color: ${( props: IndexStyledProps ) => ( props.selected ? `${secondary}` : `${grey}` )};
    border-radius: ${borderRadius};
    justify-content: center;
    align-items: center;
`

export const Separator = styled.View`
    width: 10px;
    height: 10px;
`