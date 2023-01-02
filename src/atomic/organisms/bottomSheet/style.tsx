import styled from "styled-components/native";
import { shadow } from "../../constants/box";
import { blackOpacity, grey, white } from "../../constants/colors";

export const BoxModal = styled.Modal`
    width: 100%;
`

export const Backdrop = styled.TouchableOpacity.attrs({
    activeOpacity: 1
})`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: ${blackOpacity};
    z-index: 999;
`

export const Main = styled.View`
    height: auto;
    min-height: 255px;
    background-color: ${white};
    elevation: ${shadow.elevation};
    box-shadow: ${shadow.boxShadow};
    shadow-opacity: ${shadow.shadowOpacity};
    border-radius: 20px;
    padding: 15px;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 30px;
    z-index: 9999;
`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    position: relative;
    margin-bottom: 15px;
`

export const ButtonClose = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background-color: ${grey};
    border-radius: 50px;
    top: 0px;
    position: absolute;
    right: 0px;
    align-items: center;
    justify-content: center;
`

export const ButtonCloseImg = styled.Image`
    width: 13px;
    height: 13px;
`

export const Body = styled.View`
    flex: 1;
`

export const Footer = styled.View`
    margin-top: 15px;
    width: 100%;
    align-items: center;
`