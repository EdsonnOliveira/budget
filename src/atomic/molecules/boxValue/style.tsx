import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

import { gradient, white } from '../../constants/colors';

import { BoxValueStyledProps } from './models';

export const Main = styled(LinearGradient).attrs({
    colors: gradient,
    start: { x: 0, y: 1 },
    end: { x: 0, y: 0 },
})`
    width: 100%;
    height: ${( props:BoxValueStyledProps ) => (props.type == 'big' ? '300' : '160') }px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    position: relative;
`

export const BoxButton = styled.View`
    position: absolute;
    right: 0px;
    top: 50px;
`

export const BoxText = styled.View`
    flex-direction: row;
    align-items: ${( props => props.align ? 'center' : 'null')};
`

export const LineValue = styled.View`
    width: 150px;
    height: 5px;
    background-color: ${white};
`