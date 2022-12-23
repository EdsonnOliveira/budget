import React from "react";

import Button from "../../atoms/button";
import Text from "../../atoms/text";
import Arrow from '../../../assets/icons/arrow.png'

import { black } from "../../constants/colors";

import { IndexProps } from "./models";
import { Main } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackProps } from "../../../routes/models";

const Header: React.FC<IndexProps> = ({
    title,
    onBack
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    return (
        <Main>
            <Button
                type='ghostSmall'
                text={Arrow}
                onPress={() => onBack ?? navigation.goBack()}
                sizeIcon={{width: '20px', height: '20px'}}
            />
            <Text text={title} type='H2' color={black} mt='10px' mb='10px' />
        </Main>
    )
}

export default Header;