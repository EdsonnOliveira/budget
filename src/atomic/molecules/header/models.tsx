import { StatusBarStyle, ColorValue } from "react-native";
import { StyledProps } from "styled-components";

export interface IndexProps {
    statusBar?: StatusBarType;
    title: string;
    onBack?: () => void;
    noBackButton?: boolean;
}

type StatusBarType = {
    barStyle?: null | StatusBarStyle | undefined;
    bgColor?: ColorValue | undefined;
}

export type IndexStyledProps = StyledProps<IndexProps>