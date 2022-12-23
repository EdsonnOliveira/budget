import styled from "styled-components/native";
import { AlignmentsStyledProps } from "../../../constants/align";
import { IndexStyledProps } from "./models";

const BoxCommon = styled.View`
    flex: ${( props: IndexStyledProps ) => ( props.flex ? 1 : 'none' )};
    flex-direction: ${( props: AlignmentsStyledProps ) => ( props.flexDirection ?? 'column' )};
    justify-content: ${( props: AlignmentsStyledProps ) => ( props.justifyContent ?? 'flex-start' )};
    align-items: ${( props: AlignmentsStyledProps ) => ( props.alignItems ?? 'flex-start' )};
`

export default BoxCommon;