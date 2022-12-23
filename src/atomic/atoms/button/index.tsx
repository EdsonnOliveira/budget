import React from "react";
import Text from "../text";

import { GhostSmall, Image, MarkerShadow, HexagonGradientMedium, GhostSolidSmall, HexagonGradientLarge, BoxCenteredText, HexagonPrimaryMedium, HexagonGhostSolidMedium, MarkerBottom } from "./style";

import HexagonPrimaryMediumImage from '../../../assets/vectors/hexagonPrimaryMedium.png'
import HexagonGradientMediumImage from '../../../assets/vectors/hexagonGradientMedium.png'
import HexagonGradientLargeImage from '../../../assets/vectors/hexagonGradientLarge.png'
import HexagonGhostSolidMediumImage from '../../../assets/vectors/hexagonGhostSolidMedium.png'
import IndexProps from "./models";
import { white } from "../../constants/colors";
import Tag from "../tag";

const Button: React.FC<IndexProps> = ({
    type,
    text,
    icon,
    onPress,
    marker,
    tag,
    flex,
    sizeIcon,
    mt,
    ml,
    mr,
    mb
}) => {
    switch (type) {
        case 'hexagonPrimaryMedium':
            return (
                <HexagonPrimaryMedium onPress={onPress} mt={mt} ml={ml} mr={mr} mb={mb}>
                    {
                        tag && <Tag value={tag} type='circle' top='-5px' right='15px' />
                    }
                    <Image source={text} style={{width: '100%', top: 28, position: 'absolute', zIndex: 2, resizeMode: 'contain'}} />
                    <Image source={HexagonPrimaryMediumImage} style={{width: '100%', height: '100%'}} />
                </HexagonPrimaryMedium>
            )
        case 'hexagonGradientLarge':
            return (
                <HexagonGradientLarge onPress={onPress} mt={mt} ml={ml} mr={mr} mb={mb}>
                    <Image source={HexagonGradientLargeImage} style={{width: '100%', height: '100%'}} />
                    {
                        typeof text == 'string'
                        ? (
                            <BoxCenteredText>
                                <Text text={text} type='H3' color={white} />
                            </BoxCenteredText>
                        )
                        : (
                            <Image
                                source={text}
                                style={{
                                    width: sizeIcon?.width ? sizeIcon?.width : '100%',
                                    height: sizeIcon?.height ? sizeIcon?.height : null,
                                    top: sizeIcon?.top ? sizeIcon?.top : 28,
                                    position: 'absolute',
                                    zIndex: 2,
                                    resizeMode: 'contain'
                                }}
                            />
                        )
                    }
                </HexagonGradientLarge>
            )
        case 'hexagonGradientMedium':
            return (
                <HexagonGradientMedium onPress={onPress} mt={mt} ml={ml} mr={mr} mb={mb}>
                    <Image source={text} style={{width: '100%', top: 28, position: 'absolute', zIndex: 2, resizeMode: 'contain'}} />
                    <Image source={HexagonGradientMediumImage} style={{width: '100%', height: '100%'}} />
                </HexagonGradientMedium>
            )
        case 'hexagonGhostSolidMedium':
            return (
                <HexagonGhostSolidMedium onPress={onPress} mt={mt} ml={ml} mr={mr} mb={mb}>
                    <Image source={text} style={{width: '100%', top: 28, position: 'absolute', zIndex: 2, resizeMode: 'contain'}} />
                    <Image source={HexagonGhostSolidMediumImage} style={{width: '100%', height: '100%'}} />
                </HexagonGhostSolidMedium>
            )
        case 'ghostSmall':
            return (
                <GhostSmall
                    onPress={onPress}
                    flex={flex}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                >
                    {
                        typeof text == 'string'
                        ? <Text text={text} type='H4' />
                        : <Image source={text} sizeIcon={{...sizeIcon}} style={{ resizeMode: 'contain' }} />
                    }
                    {
                        marker && <MarkerShadow><MarkerBottom /></MarkerShadow>
                    }
                </GhostSmall>
            )
        case 'ghostSolidSmall':
            return (
                <GhostSolidSmall
                    onPress={onPress}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                >
                    <Image source={icon} sizeIcon={{...sizeIcon}} style={{ resizeMode: 'contain' }} />
                    <Text text={text.toString()} type='H4' color={white} ml='10px' />
                </GhostSolidSmall>
            )
    }
}

export default Button;