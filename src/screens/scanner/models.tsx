import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlashMode } from "react-native-camera";
import { StackProps } from "../../routes/models";

export interface ViewProps extends CameraProps, ManualProps {
    mode: ModeScanner;
}

export interface CameraProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
    flashMode: keyof FlashMode
    setFlashMode: (mode: keyof FlashMode) => void;
    scanned: boolean;
    scannedProduct: ScannedProductProps;
    setBarCode: (bar: string) => void;
    productAdded: boolean;
    addProductScanning: () => void

    items: ScannedProductProps[];
    quantity: number;
    total: number;
}

export interface ManualProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
    quantity: number;
}

export type ScannedProductProps = {
    sequence: string;
    name: string;
    barCode: string;
    price: string | number;
} | null

export type ModeScanner = 'camera' | 'manual';