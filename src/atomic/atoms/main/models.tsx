import { StyledProps } from "styled-components";
import { StatusBarStyle, ColorValue } from "react-native";

export interface IndexProps {
    statusBar?: StatusBarType;
    children?: React.ReactNode[] | React.ReactNode | undefined | string | number;
    noMargin?: boolean;
    bgColor?: ColorValue | string;
}

type StatusBarType = {
    doNotShow?: boolean;
    barStyle?: null | StatusBarStyle | undefined;
    bgColor?: ColorValue | undefined;
}

export type IndexStyledProps = StyledProps<IndexProps>
