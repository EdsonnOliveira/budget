import { Image } from "react-native";
import { StyledProps } from "styled-components";
import { Margins } from "../../constants/spacing";

export default interface IndexProps extends Margins {
    type: ButtonTypes;
    text: string | Image;
    icon?: SVGElement | Image;
    onPress: () => void;
    marker?: boolean;
    tag?: string;
    flex?: boolean;
    sizeIcon?: Dimension;
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
    sizeIcon?: Dimension;
    selected?: boolean;
    disabled?: boolean
}>

type Dimension = {
    width: string | number;
    height: string | number;
    top?: string | number;
    left?: string | number;
}