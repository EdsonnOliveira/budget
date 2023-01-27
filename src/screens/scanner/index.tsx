import React, { useEffect, useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlashMode } from "react-native-camera";

import { white } from "../../atomic/constants/colors";
import Main from "../../atomic/atoms/main";
import Header from "../../atomic/molecules/header";
import { StackProps } from "../../routes/models";

import DBProducts, { Models as ModelsProducts } from '../../services/sqlite/products'
import DBSales, { Models as ModelsSales } from '../../services/sqlite/sales'
import DBSalesItems, { Models as ModelsSalesItems } from '../../services/sqlite/sales/items'

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

    const [idSale, setIdSale] = useState<number>(0)
    const [items, setItems] = useState<ScannedProductProps[]>([])
    const [quantity, setQuantity] = useState<number>(0)

    useEffect(() => {
        findProduct(barCode)
        setInfos()
    }, [barCode])

    const findProduct = (barCode: string) => {
        setScanned(false)
        if (!barCode)
            return

        DBProducts
        .select({barCode})
        .then((data: ModelsProducts) => {
            let product: ScannedProductProps = {
                sequence: String(quantity + 1),
                name: String(data.name),
                barCode,
                price: Number(data.price)
            }

            setScanned(true)
            setScannedError(false)
            setScannedProduct(product)
        })
        .catch(() => setScannedError(true))
    }

    const setInfos = () => {
        DBSales
        .findOpened()
        .then((data: ModelsSales) => {
            setIdSale(Number(data.id))
            DBSalesItems
            .findValues({idSale: data.id})
            .then((data: ModelsSalesItems) => setQuantity(Number(data.qt)))
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setProductAdded(false)
        }, 5000);
    }, [productAdded])

    const addProductScanning = () => {
        if (!scanned)
            return

        DBSales
        .findOpened()
        .then((data: ModelsSales) => insertItem(String(data.id)))
        .catch(() => {
            let date = new Date();
            let currentDate = `${date.getDate()}/${String(date.getMonth()+1).padStart(2, '0')}/${date.getFullYear()}`
            let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

            DBSales
            .insert({date: currentDate, time: currentTime})
            .then((data: string) => {
                setIdSale(Number(data))
                insertItem(data)
            })
        })

        setScanned(false)
        setProductAdded(true)
        setQuantity(quantity+1)
    }

    const insertItem = (idSale: string) => {
        DBSalesItems
        .insert({
            idSale,
            sequence: String(quantity + 1),
            name: scannedProduct?.name,
            priceUnit: String(scannedProduct?.price),
            priceTotal: String(scannedProduct?.price),
            barCode,
            qt: '1'
        })
        .then(() => {
            let array: ScannedProductProps[] = items
            let product: ScannedProductProps = {
                sequence: String(quantity + 1),
                name: String(scannedProduct?.name),
                barCode,
                price: Number(scannedProduct?.price)
            }

            array.push(product)
            setItems(array)
        })
    }

    return (
        <Main statusBar={{ barStyle: 'dark-content', bgColor: white }} noMargin bgColor="#282E36">
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
                idSale={idSale}
                quantity={quantity}
            />
        </Main>
    )
}

export default Scanner;