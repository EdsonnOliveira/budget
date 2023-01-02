import React from "react";

import { white } from "../../../atomic/constants/colors";
import Button from "../../../atomic/atoms/button";
import Text from "../../../atomic/atoms/text";

import Arrow from '../../../assets/icons/arrow-purple.png'
import { Box, Main } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackProps } from "../../../routes/models";
import { StatusBar } from "react-native";

const Finished: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    return (
        <Main>
            <StatusBar barStyle='light-content' />
            <Box />
            <Box>
                <Text
                    type='H1'
                    text='Sucesso!'
                    color={white}
                    align='center'
                    mb='15px'
                />
                <Text
                    type='H3'
                    text={`Seu orçamento foi finalizado\ne contabilizado na sua conta.`}
                    color={white}
                    align='center'
                />
            </Box>
            <Button
                type='hexagonTertiaryMedium'
                text={Arrow}
                onPress={() => navigation.navigate('Home')}
                mb='50px'
            />
        </Main>
    )
}

export default Finished;