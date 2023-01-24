import { ColorValue } from "react-native";
import { StyledProps } from "styled-components";

export type IndexStyledProps = StyledProps<{
    bgColor?: ColorValue | undefined;
    noTab?: boolean;
}>