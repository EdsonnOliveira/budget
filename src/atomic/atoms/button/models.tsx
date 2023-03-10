import { Image } from "react-native";
import { StyledProps } from "styled-components";
import { IconType } from "../../../constants/types";
import { Margins } from "../../constants/spacing";

export default interface IndexProps extends Margins {
    type: ButtonTypes;
    text: string | Image;
    icon?: SVGElement | Image;
    onPress: () => void;
    marker?: boolean;
    tag?: string;
    flex?: boolean;
    sizeIcon?: IconType;
    disabled?: boolean
    selected?: boolean
}

export type ButtonTypes = 'primaryLarge' | 'primaryMedium' | 'primarySmall' |
            'secundaryLarge' | 'secundaryMedium' | 'secundarySmall' |
            'tertiaryLarge' | 'tertiaryMedium' | 'tertiarySmall' |
            'warningLarge' | 'warningMedium' | 'warningSmall' |
            'gradientLarge' | 'gradientMedium' | 'gradientSmall' |
            'hexagonPrimaryLarge' | 'hexagonPrimaryMedium' |
            'hexagonSecundaryLarge' | 'hexagonSecundaryMedium' |
            'hexagonTertiaryLarge' | 'hexagonTertiaryMedium' |
            'hexagonGhostSolidLarge'| 'hexagonGhostSolidMedium' |
            'hexagonGradientLarge' | 'hexagonGradientMedium' | 'hexagonGradientSmall' |
            'ghostSmall' |
            'ghostSolidSmall' |
            'bottomSheet'

export type IndexStyledProps = StyledProps<{
    flex?: boolean;
    sizeIcon?: IconType;
    selected?: boolean;
    disabled?: boolean
}>