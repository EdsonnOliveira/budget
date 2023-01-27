import { StyledProps } from "styled-components";

export interface IndexProps {
    title: string;
    onBack?: () => void;
    noBackButton?: boolean;
}

export type IndexStyledProps = StyledProps<IndexProps>