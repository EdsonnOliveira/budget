import styled from "styled-components/native";
import { borderRadius } from "../../constants/button";
import { secondary } from "../../constants/colors";
import { PositionStyledProps } from "../../constants/spacing";
import { IndexStyledProps } from "./models";

export const Main = styled.View`
    width: ${( props: IndexStyledProps ) => ( props.type == 'circle' ? '30px' : '50px' )};
    height: ${( props: IndexStyledProps ) => ( props.type == 'circle' ? '30px' : '50px' )};
    background-color: ${( props: IndexStyledProps ) => ( props.color ?? secondary )};
    border-radius: ${( props: IndexStyledProps ) => ( props.type == 'circle' ? '30px' : `${borderRadius}` )};
    position: ${( props: IndexStyledProps ) => ( props.type == 'circle' ? 'absolute' : 'null' )};
    z-index: 99;
    justify-content: center;
    align-items: center;

    top: ${( props: PositionStyledProps ) => ( props.top ?? 'null' )};
    left: ${( props: PositionStyledProps ) => ( props.left ?? 'null' )};
    right: ${( props: PositionStyledProps ) => ( props.right ?? 'null' )};
    bottom: ${( props: PositionStyledProps ) => ( props.bottom ?? 'null' )};
`