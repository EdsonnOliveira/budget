import styled from "styled-components/native";
import { AlignmentsStyledProps } from "../../../constants/align";
import { MarginsStyledProps } from "../../../constants/spacing";
import { IndexStyledProps } from "./models";

const BoxCommon = styled.View`
    width: ${( props: IndexStyledProps ) => ( props.width ? props.width : 'null' )};
    height: ${( props: IndexStyledProps ) => ( props.height ? props.height : 'null' )};
    flex: ${( props: IndexStyledProps ) => ( props.flex ? 1 : 'none' )};
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor ?? 'transparent' )};
    flex-direction: ${( props: AlignmentsStyledProps ) => ( props.flexDirection ?? 'column' )};
    justify-content: ${( props: AlignmentsStyledProps ) => ( props.justifyContent ?? 'flex-start' )};
    align-items: ${( props: AlignmentsStyledProps ) => ( props.alignItems ?? 'flex-start' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export default BoxCommon;