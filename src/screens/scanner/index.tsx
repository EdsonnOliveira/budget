import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlashMode } from "react-native-camera";

import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { StackProps } from "../../routes/models";
import DBProducts, { Models as ModelsProducts } from '../../services/products'

import { ModeScanner, ScannedProductProps } from "./models";
import View from "./view";

const Scanner: React.FC = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>()

    const [mode, setMode] = useState<ModeScanner>('camera')
    const [flashMode, setFlashMode] = useState<keyof FlashMode>('off' || 'torch')

    const [scanned, setScanned] = useState<boolean>(false)
    const [scannedError, setScannedError] = useState<boolean>(false)
    const [barCode, setBarCode] = useState<string>('')
    const [scannedProduct, setScannedProduct] = useState<ScannedProductProps>(null)
    const [productAdded, setProductAdded] = useState<boolean>(false)

    const [items, setItems] = useState<ScannedProductProps[]>([])
    const [total, setTotal] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)

    useEffect(() => {
        findProduct(barCode)
    }, [barCode])

    const findProduct = (barCode: string) => {
        setScanned(false)
        if (!barCode)
            return

        DBProducts
        .select({barCode})
        .then((data: ModelsProducts) => {
            let array: ScannedProductProps[] = items
            
            let product: ScannedProductProps = {
                sequence: String(quantity + 1),
                name: String(data.name),
                barCode,
                price: Number(data.price)
            }

            array.push(product)

            setScanned(true)
            setScannedError(false)
            setScannedProduct(product)
            setItems(array)
            setTotal(total + Number(product.price))
        })
        .catch(() => setScannedError(true))
    }

    useEffect(() => {
        setTimeout(() => {
            setProductAdded(false)
        }, 5000);
    }, [productAdded])

    const addProductScanning = () => {
        if (!scanned)
            return
        setScanned(false)
        setProductAdded(true)
        setQuantity(quantity+1)
    }

    return (
        <Main statusBar={{ barStyle: 'dark-content' }} noMargin bgColor="#282E36">
            <Header title='Escanear Produto' />
            <View
                mode={mode}
                navigation={navigation}
                setMode={setMode}
                flashMode={flashMode}
                setFlashMode={setFlashMode}
                scanned={scanned}
                scannedError={scannedError}
                scannedProduct={scannedProduct}
                barCode={barCode}
                setBarCode={setBarCode}
                addProductScanning={addProductScanning}
                productAdded={productAdded}
                items={items}
                total={total}
                quantity={quantity}
            />
        </Main>
    )
}

export default Scanner;