import { ItemType } from "../constants/types";
import { ScannedProductProps } from "../screens/scanner/models";

export type StackProps = {
    Home: undefined;
    Scanner: undefined;
    Details: {
        idSale: number | string;
    };
    DetailsFinished: undefined;
    Products: undefined;
    ProductsAdd: undefined;
    ProductsModify: {
        data: ItemType
    };
}