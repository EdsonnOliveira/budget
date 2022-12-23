import { StyledProps } from "styled-components";
import { TextAlign } from "../../constants/text";

export interface IndexProps {
    value: string;
    onChangeText: (value: string) => void;
    placeholder: string;
    textAlign?: TextAlign;
}

export type IndexStyledProps = StyledProps<{
    textAlign?: TextAlign;
}>