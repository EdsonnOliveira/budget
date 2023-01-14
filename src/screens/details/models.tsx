import { ItemsRadio } from "../../atomic/molecules/radio/models";
import { ItemType, ModalType } from "../../constants/types";

export interface ViewProps {
    total: string;
    products: ItemType[];
    setModalPayment: ModalType;
    paymentSelected: ItemsRadio;
    setModalItem: ModalType;
    setItemSelected: (item: number) => void;
    disabledFinish: boolean;
    finishSale: () => void;
}