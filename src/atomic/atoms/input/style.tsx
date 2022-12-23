import styled from "styled-components/native";
import { white, gray } from "../../constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.View`
    height: 65px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${white};
    border-radius: 15px;
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: gray
})`
    flex: 1;
    text-align: ${( props: IndexStyledProps ) => ( props.textAlign ?? 'left' )};
    font-size: 21px;
`