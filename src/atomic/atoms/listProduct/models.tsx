import { ItemType } from "../../../constants/types";

export interface IndexProps {
    data: ItemType[];
    onPress?: (data: ItemType, index: number) => void;
}