import { StyledProps } from "styled-components";

export interface IndexProps {
    items: ItemsRadio[];
    selected: number;
    setSelected: (selected: ItemsRadio) => void;
    textSelected?: string;
}

export type ItemsRadio = {
    id: number;
    description: string;
}

export type IndexStyledProps = StyledProps<{
    selected: number;
}>