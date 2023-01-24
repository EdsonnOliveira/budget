import { ItemType } from "../../../constants/types";

export interface IndexProps {
    data: ItemType[] | null;
    onPress?: (data: ItemType, index: number) => void;
}