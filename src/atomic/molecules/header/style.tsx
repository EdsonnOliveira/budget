import styled from "styled-components/native";
import { boxShadow, elevation, shadowOpacity } from "../../constants/box";
import { white } from "../../constants/colors";

export const Main = styled.SafeAreaView`
    width: 100%;
    height: 130px;
    background-color: ${white};
    elevation: ${elevation};
    box-shadow: ${boxShadow};
    shadow-opacity: ${shadowOpacity};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`