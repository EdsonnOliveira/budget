import styled from "styled-components/native";
import { IndexStyledProps } from "./models";

export const Container = styled.ScrollView`
    flex: 1;
    margin-bottom: ${( props: IndexStyledProps ) => (props.noMargin ? '0px' : '100px')};
    background-color: ${( props: IndexStyledProps ) => (props.bgColor ?? 'transparent')};
    /* background-color: blue; */
`