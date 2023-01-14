import { ItemType } from "../constants/types";

export type StackProps = {
    Home: undefined;
    Scanner: undefined;
    Details: {
        total: number;
    };
    DetailsModify: {
        data: undefined
    };
    DetailsFinished: undefined;
    Products: undefined;
    ProductsAdd: undefined;
    ProductsModify: {
        data: ItemType
    };
}