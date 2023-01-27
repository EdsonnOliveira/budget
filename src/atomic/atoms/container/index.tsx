import { Platform } from "react-native";
import styled from "styled-components/native";
import { AlignmentsStyledProps } from "../../constants/align";
import { screenHeight } from "../../constants/dimension";
import { IndexStyledProps } from "./models";

const Container = styled.View`
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor ?? 'transparent' )};
    flex: 1;
    height: ${( props: IndexStyledProps ) => ( props.heightContent && Platform.OS === 'android' ? `${screenHeight-90}px` : 'auto' )};
    padding: 20px 16px;
    padding-bottom: ${( props: IndexStyledProps ) => ( props.noTab ? 'null' : '40px' )};
    flex-direction: ${( props: AlignmentsStyledProps ) => ( props.flexDirection ?? 'column' )};
    justify-content: ${( props: AlignmentsStyledProps ) => ( props.justifyContent ?? 'flex-start' )};
    align-items: ${( props: AlignmentsStyledProps ) => ( props.alignItems ?? 'flex-start' )};
`

export default Container;