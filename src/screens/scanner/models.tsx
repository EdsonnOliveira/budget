import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlashMode } from "react-native-camera";
import { StackProps } from "../../routes/models";

export interface ViewProps extends CameraProps, ManualProps {
    mode: ModeScanner
}

export interface CameraProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
    flashMode: keyof FlashMode
    setFlashMode: (mode: keyof FlashMode) => void;
    scanned: string;
    setScanned: (bar: string) => void;
}

export interface ManualProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
}

export type ModeScanner = 'camera' | 'manual';