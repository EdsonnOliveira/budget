import { Platform } from "react-native";
import styled from "styled-components/native";
import { shadow } from "../../constants/box";
import { white } from "../../constants/colors";

export const Main = styled.SafeAreaView`
    width: 100%;
    height: 70px;
    margin-top: ${Platform.OS === 'android' ? '30px' : 'auto'};
    background-color: ${white};
    elevation: ${shadow.elevation};
    box-shadow: ${shadow.boxShadow};
    shadow-opacity: ${shadow.shadowOpacity};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
`