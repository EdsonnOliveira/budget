import styled from "styled-components/native";
import { blackGrey } from "../../constants/colors";

export const Main = styled.View`
    width: 100%;
`

export const Item = styled.View`
    width: 100%;
    height: 45px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${blackGrey};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
`