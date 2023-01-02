import styled from "styled-components/native";
import { white } from "../../constants/colors";
import { IndexStyledProps } from "./models";

export const Container = styled.ScrollView`
    flex: 1;
    margin-bottom: ${( props: IndexStyledProps ) => ( props.noMargin ? '0px' : '100px' )};
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor ?? 'transparent' )};
`

export const SafeArea = styled.SafeAreaView`
    flex: 0;
    background-color: ${( props: IndexStyledProps ) => ( props.statusBar?.bgColor ?? `${white}` )};
`