import { StyledProps } from "styled-components";
import { Margins } from "../../constants/spacing";

export interface IndexProps extends Margins {
    title: string;
    type: TypeNotification;
}

type TypeNotification = 'success' | 'warning' | 'error'
export type IndexStyledProps = StyledProps<IndexProps>