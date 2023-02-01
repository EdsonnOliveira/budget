import { KeyboardType } from "react-native";
import { StyledProps } from "styled-components";
import { IconType } from "../../../constants/types";
import { Margins } from "../../constants/spacing";
import { TextAlign } from "../../constants/text";

export interface IndexProps extends Margins {
    width?: string;
    value: string;
    onChangeText: (value: string) => void;
    placeholder: string;
    textAlign?: TextAlign;
    keyboardType?: KeyboardType | 'money'
    actionButton?: Button | undefined;
    autoFocus?: boolean;
    icon?: IconType
}

type Button = {
    onPress?: () => void;
}

export type IndexStyledProps = StyledProps<IndexProps>