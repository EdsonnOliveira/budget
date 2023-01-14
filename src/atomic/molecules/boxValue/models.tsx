import { StyledProps } from "styled-components";

export default interface Model {
    type: types
    label?: string;
    value: string;
}

export interface MainProps {
    type: types;
}

type types = 'big' | 'medium'

export type BoxValueStyledProps = StyledProps<{
    type: types;
}>