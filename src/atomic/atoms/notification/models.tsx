import { StyledProps } from "styled-components";
import { Margins } from "../../constants/spacing";

export interface NotificationProps extends Margins {
    title: string;
    type: TypeNotification;
    state?: StateNotification
}

type TypeNotification = 'success' | 'warning' | 'error'
type StateNotification = 'show' | 'hide'
export type IndexStyledProps = StyledProps<IndexProps>