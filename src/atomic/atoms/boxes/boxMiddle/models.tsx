import { Image } from "react-native";
import { Margins } from "../../../constants/spacing";

export default interface Model extends Margins {
    icon: string | Image;
    title: string;
    value: string;
    onPress?: () => void;
    onLongPress?: () => void;
}