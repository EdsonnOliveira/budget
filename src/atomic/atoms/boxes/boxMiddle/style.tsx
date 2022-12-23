import styled from "styled-components/native";
import { boxShadow, elevation, shadowOpacity } from "../../../constants/box";

import { borderRadius } from "../../../constants/button";
import { secondary, white } from "../../../constants/colors";
import { MarginsStyledProps } from "../../../constants/spacing";

export const Main = styled.View`
    flex: 1;
    height: 100px;
    border-radius: ${borderRadius};
    background-color: ${white};
    elevation: ${elevation};
    box-shadow: ${boxShadow};
    shadow-opacity: ${shadowOpacity};
    padding: 15px;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const BoxIcon = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${secondary};
    justify-content: center;
    align-items: center;
`

export const Image = styled.Image`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
`

export const BoxText = styled.View`
    flex: 1;
    justify-content: flex-end;
`