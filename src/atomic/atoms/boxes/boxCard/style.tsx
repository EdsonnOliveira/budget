import styled from "styled-components/native";
import { shadow } from "../../../constants/box";
import { borderRadius } from "../../../constants/button";
import { white } from "../../../constants/colors";
import { MarginsStyledProps } from "../../../constants/spacing";

export const Main = styled.View`
    width: 270px;
    height: 66px;
    border-radius: ${borderRadius};
    background-color: ${white};
    elevation: ${shadow.elevation};
    box-shadow: ${shadow.boxShadow};
    shadow-opacity: ${shadow.shadowOpacity};
    padding: 10px;
    flex-direction: row;
    align-items: center;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const BoxText = styled.View`
    margin-left: 10px;
`