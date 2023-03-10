import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ref } from "react";
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
    setScannedError: (state: boolean) => void
    scannedError: boolean;
    scannedProduct: ScannedProductProps;
    barCode: string;
    setBarCode: (bar: string) => void;
    productAdded: boolean;
    addProductScanning: () => void

    idSale: number;
    quantity: number;
}

export interface ManualProps {
    setMode: (mode: ModeScanner) => void;
    navigation: NativeStackNavigationProp<StackProps>;
    scanned: boolean;
    setScannedError: (state: boolean) => void
    scannedError: boolean;
    scannedProduct: ScannedProductProps;
    barCode: string;
    setBarCode: (bar: string) => void;
    productAdded: boolean;
    addProductScanning: () => void

    idSale: number;
    quantity: number;
}

export type ScannedProductProps = {
    sequence: string;
    name: string;
    barCode: string;
    price: string | number;
} | null

export type ModeScanner = 'camera' | 'manual';