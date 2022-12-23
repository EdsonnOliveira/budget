import { StyledProps } from "styled-components";
import { Position } from "../../constants/spacing";

export interface IndexProps extends Position {
    value: string;
    color?: string;
    type: Types;
}

type Types = 'circle' | 'rectangle'

export type IndexStyledProps = StyledProps<IndexProps>