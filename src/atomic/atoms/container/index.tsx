import styled from "styled-components/native";
import { AlignmentsStyledProps } from "../../constants/align";
import { screenHeight } from "../../constants/dimension";
import { IndexStyledProps } from "./models";

const Container = styled.View`
    flex: ${( props: IndexStyledProps ) => ( props.noTab ? 'null' : 1 )};
    height: ${( props: IndexStyledProps ) => ( props.noTab ? 'null' : `${screenHeight - 130}px` )};
    padding: 20px;
    padding-bottom: ${( props: IndexStyledProps ) => ( props.noTab ? 'null' : '40px' )};
    flex-direction: ${( props: AlignmentsStyledProps ) => ( props.flexDirection ?? 'column' )};
    justify-content: ${( props: AlignmentsStyledProps ) => ( props.justifyContent ?? 'flex-start' )};
    align-items: ${( props: AlignmentsStyledProps ) => ( props.alignItems ?? 'flex-start' )};
`

export default Container;