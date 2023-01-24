import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BudgetType } from "../../constants/types";
import { StackProps } from "../../routes/models";

export interface ViewProps {
    history: BudgetType[] | null;
    navigation: NativeStackNavigationProp<StackProps>;
}