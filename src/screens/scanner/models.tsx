import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackProps } from "../../routes/models";

export interface ViewProps {
    mode: ModeScanner
    setMode: (mode: ModeScanner) => void;
}

export interface CameraProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
}

export interface ManuelProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
}

export type ModeScanner = 'camera' | 'manual';