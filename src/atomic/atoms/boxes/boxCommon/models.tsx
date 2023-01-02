import { ColorValue } from "react-native";
import { StyledProps } from "styled-components";

export type IndexStyledProps = StyledProps<{
    width?: string | number;
    height?: string | number;
    flex?: boolean;
    bgColor?: ColorValue | undefined;
}>;