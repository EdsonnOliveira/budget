import styled from "styled-components/native";

import { shadow } from "../../constants/box";
import { borderRadius } from "../../constants/button";
import { primary, secondary, warning } from "../../constants/colors";
import { MarginsStyledProps } from "../../constants/spacing";

import { IndexStyledProps } from "./models";

export const Main = styled.TouchableOpacity`
    width: 270px;
    height: 66px;
    border-radius: ${borderRadius};
    background-color: ${( props: IndexStyledProps ) => (props.type === 'success'
                                                        ? primary
                                                        : props.type === 'warning'
                                                        ? secondary
                                                        : warning)};
    elevation: ${shadow.elevation};
    box-shadow: ${shadow.boxShadow};
    shadow-opacity: ${shadow.shadowOpacity};
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`