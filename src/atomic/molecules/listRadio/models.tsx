import { StyledProps } from "styled-components";
import { ItemsRadio } from "../radio/models";

export interface IndexProps {
    items: ItemsRadio[];
    itemSelected: number;
    setItemSelected: (index: number) => void;
}

export type IndexStyledProps = StyledProps<IndexProps>