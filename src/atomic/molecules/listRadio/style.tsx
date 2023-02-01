import styled from "styled-components/native";
import { borderRadius } from "../../constants/button";
import { grey, secondary, white } from "../../constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.View`
    width: 100%;
    height: 100px;
    background-color: ${white};
    border-radius: ${borderRadius};
    padding: 10px;
    flex-direction: row;
`

export const BoxItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    flex: 1;
    background-color: ${( props: IndexStyledProps ) => (props.itemSelected ? `${secondary}` : `${grey}`)};
    border-radius: ${borderRadius};
    justify-content: center;
    align-items: center
`