import { RNCamera } from "react-native-camera";
import styled from "styled-components";
import { screenHeight, screenWidth } from "../../atomic/constants/dimension";

export const Scanner = styled(RNCamera)`
    flex: 1;
    width: ${screenWidth}px;
    height: ${screenHeight}px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: -100px;
    padding-top: 120px;
    padding-bottom: 70px;
    padding-left: 20px;
    padding-right: 20px;
`