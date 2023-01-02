import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { gradient } from "../../../atomic/constants/colors";

export const Main = styled(LinearGradient).attrs({
    colors: gradient,
    start: { x: 0, y: 1 },
    end: { x: 0, y: 0 },
})`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`

export const Box = styled.View`
    width: auto;
`