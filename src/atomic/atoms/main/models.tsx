import { StyledProps } from "styled-components";

export interface IndexProps {
    statusBar?: boolean;
    children?: React.ReactNode[] | undefined | string | number;
    noMargin?: boolean;
    bgColor?: string;
}

export type IndexStyledProps = StyledProps<{
    noMargin?: boolean;
    bgColor?: string;
}>