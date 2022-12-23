import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient'
import { borderRadius } from "../../constants/button";
import { gradient, secondary } from "../../constants/colors";
import { MarginsStyledProps } from "../../constants/spacing";
import { IndexStyledProps } from "./models";
import { elevation } from "../../constants/box";

export const PrimaryMedium = styled.TouchableOpacity`
    width: 150px;
    height: 55px;
    border-radius: ${borderRadius};
`

export const GhostSmall = styled.TouchableOpacity`
    flex: ${( props: IndexStyledProps ) => (props.flex ? 1 : 'none')};
    padding: 20px;
    border-radius: ${borderRadius};
    justify-content: center;
    align-items: center;
`

export const MarkerShadow = styled.View`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    bottom: 0;
    elevation: ${elevation};
    box-shadow: 0px 2px 3px ${secondary};
    shadow-opacity: 1;
    justify-content: center;
    align-items: center;
`

export const MarkerBottom = styled(LinearGradient).attrs({
    colors: gradient,
    start: { x: 0, y: 1 },
    end: { x: 0, y: 0 },
})`
    width: 20px;
    height: 11px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    bottom: 0;
`

export const Image = styled.Image`
    width: ${( props: IndexStyledProps ) => ( props.sizeIcon?.width ?? '30px' )};
    height: ${( props: IndexStyledProps ) => ( props.sizeIcon?.height ?? '30px' )};
`

export const HexagonPrimaryMedium = styled.TouchableOpacity`
    width: 100px;
    height: 90px;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const HexagonGradientLarge = styled.TouchableOpacity`
    width: 130px;
    height: 120px;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const HexagonGradientMedium = styled.TouchableOpacity`
    width: 100px;
    height: 90px;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const HexagonGhostSolidMedium = styled.TouchableOpacity`
    width: 80px;
    height: 90px;
    object-fit: contain;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? '5px')};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const BoxCenteredText = styled.View`
    width: 100%;
    height: 100%;
    z-index: 2;
    justify-content: center;
    align-items: center;
    position: absolute;
`

export const GhostSolidSmall = styled.TouchableOpacity`
    padding-top: 10px;
    padding-right: 13px;
    padding-bottom: 10px;
    padding-left: 13px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.6);
    border-style: solid;
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
`