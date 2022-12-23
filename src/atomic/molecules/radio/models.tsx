import { StyledProps } from "styled-components";

export interface IndexProps {
    items: Items[];
    selected: number;
    setSelected: (selected: number) => void;
    textSelected?: string;
}

export type Items = {
    id: number;
    description: string;
}

export type IndexStyledProps = StyledProps<{
    selected: number;
}>