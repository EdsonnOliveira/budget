import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ItemType } from "../../constants/types";
import { StackProps } from "../../routes/models";

export interface ViewProps {
    navigation: NativeStackNavigationProp<StackProps>;
    items: ItemType[];
}