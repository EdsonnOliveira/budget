import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BudgetType } from "../../constants/types";
import { StackProps } from "../../routes/models";

export interface ViewProps {
    navigation: NativeStackNavigationProp<StackProps>;
    history: BudgetType[] | null;
    soldWeek: string;
    soldMonth: string;
}